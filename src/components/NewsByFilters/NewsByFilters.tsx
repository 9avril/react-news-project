import styles from './NewsByFilters.module.css'
import { TOTAL_PAGES } from '../../constants/constants.ts'
import { PAGE_SIZE } from '../../constants/constants.ts'
import NewsList from '../NewsList/NewsList.tsx'
import NewsFilters from '../NewsFilters/NewsFilters.tsx'
import { useFilters } from '../../helpers/hooks/useFilters.ts'
import { useDebounce } from '../../helpers/hooks/useDebounce.ts'
import { useFetch } from '../../helpers/hooks/useFetch.ts'
import { getNews } from '../../api/apiNews.ts'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper.tsx'
import { NewsApiResponse } from '../../interfaces'
import { ParamsType } from '../../interfaces'

const NewsByFilters = () => {
	const { filters, changeFilters } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)
	const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
		...filters,
		keywords: debouncedKeywords,
	})

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

	const handlePage = (pageNumber: number) => {
		changeFilters('page_number', pageNumber)
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} changeFilters={changeFilters} />

			<PaginationWrapper
				top={true}
				bottom={true}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePage}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	)
}

export default NewsByFilters
