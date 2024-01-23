import { useTheme } from '../../context/ThemeContext.tsx'
import { IFilters } from '../../interfaces'
import { useAppDispatch } from '../../store/index.ts'
import { useGetCategoriesQuery } from '../../store/sevices/newsApi.ts'
import { setFilters } from '../../store/slice/newsSlice.ts'
import Categories from '../Categories/Categories.tsx'
import Search from '../Search/Search.tsx'
import Slider from '../Slider/Slider.tsx'
import style from './NewsFilters.module.css'

interface IProps {
	filters: IFilters
}

const NewsFilters = ({ filters }: IProps) => {
	const { data } = useGetCategoriesQuery(null)
	const { isDark } = useTheme()
	const dispatch = useAppDispatch()

	return (
		<div className={`${style.filters}`}>
			{data ? (
				<Slider isDark={isDark} step={200}>
					<Categories
						categories={data.categories}
						selectedCategory={filters.category}
						setSelectedCategory={category =>
							dispatch(
								setFilters({
									key: 'category',
									value: category,
								}),
							)
						}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords =>
					dispatch(
						setFilters({
							key: 'keywords',
							value: keywords,
						}),
					)
				}
			/>
		</div>
	)
}

export default NewsFilters
