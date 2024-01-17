import styles from './NewsFilters.module.css'
import Categories from '../Categories/Categories.tsx'
import Search from '../Search/Search.tsx'
import { useFetch } from '../../helpers/hooks/useFetch.ts'
import { getCategories } from '../../api/apiNews.ts'
import Slider from '../Slider/Slider.tsx'
import { IFilters } from '../../interfaces'
import { CategoriesApiResponse } from '../../interfaces'

interface IProps {
	filters: IFilters
	changeFilters: (key: string, value: string | number | null) => void
}

const NewsFilters = ({ filters, changeFilters }: IProps) => {
	const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
		getCategories,
	)
	return (
		<div className={styles.filters}>
			{dataCategories ? (
				<Slider step={200}>
					<Categories
						categories={dataCategories.categories}
						selectedCategory={filters.category}
						setSelectedCategory={category =>
							changeFilters('category', category)
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilters('keywords', keywords)}
			/>
		</div>
	)
}

export default NewsFilters
