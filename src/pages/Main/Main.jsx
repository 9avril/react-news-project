import { getCategories, getNews } from '../../api/apiNews.js'
import Categories from '../../components/Categories/Categories.jsx'
import NewsList from '../../components/NewsList/NewsList.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import style from './Main.module.css'
import Search from '../../components/Search/Search.jsx'
import { useDebounce } from '../../helpers/hooks/useDebounce.js'
import { PAGE_SIZE } from '../../constants/constants.js'
import { TOTAL_PAGES } from '../../constants/constants.js'
import NewsBanner from '../../components/NewsBanner/NewsBanner.jsx'
import { useFetch } from '../../helpers/hooks/useFetch.js'
import { useFilters } from '../../helpers/hooks/useFilters.js'

export const Main = () => {
	const { filters, changeFilters } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
	})

	const { data: dataCategories } = useFetch(getCategories)

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilters('page_number', filters.page_number + 1)
		}
	}

	const handlePrevPage = () => {
		if (filters.page_number > 1) {
			changeFilters('page_number', filters.page_number - 1)
		}
	}

	const handlePage = pageNumber => {
		changeFilters('page_number', pageNumber)
	}

	return (
		<main className={style.main}>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					selectedCategory={filters.category}
					setSelectedCategory={category =>
						changeFilters('category', category)
					}
				/>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilters('keywords', keywords)}
			/>

			<NewsBanner
				isLoading={isLoading}
				item={data && data.news && data.news[0]}
			/>

			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePage}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>

			<NewsList isLoading={isLoading} news={data?.news} />

			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePage}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>
		</main>
	)
}
