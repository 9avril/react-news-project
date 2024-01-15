import styles from './NewsByFilters.module.css'
import Pagination from '../Pagination/Pagination.jsx'
import { TOTAL_PAGES } from '../../constants/constants.js'
import NewsList from '../NewsList/NewsList.jsx'
import NewsFilters from '../NewsFilters/NewsFilters.jsx'

const NewsByFilters = ({ filters, changeFilters, news, isLoading }) => {
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
		<section className={styles.section}>
			<NewsFilters filters={filters} changeFilters={changeFilters} />

			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePage}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>

			<NewsList isLoading={isLoading} news={news} />

			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePage}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			/>
		</section>
	)
}

export default NewsByFilters
