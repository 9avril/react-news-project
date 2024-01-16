import styles from './NewsFilters.module.css'
import Categories from '../Categories/Categories.jsx'
import Search from '../Search/Search.jsx'
import { useFetch } from '../../helpers/hooks/useFetch.js'
import { getCategories } from '../../api/apiNews.js'
import Slider from '../Slider/Slider.jsx'

const NewsFilters = ({ filters, changeFilters }) => {
	const { data: dataCategories } = useFetch(getCategories)
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
