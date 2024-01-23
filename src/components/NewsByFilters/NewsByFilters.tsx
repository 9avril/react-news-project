import { TOTAL_PAGES } from '../../constants/constants.ts'
import { useDebounce } from '../../helpers/hooks/useDebounce.ts'
import { useAppDispatch, useAppSelector } from '../../store/index.ts'
import { useGetNewsQuery } from '../../store/sevices/newsApi.ts'
import { setFilters } from '../../store/slice/newsSlice.ts'
import NewsFilters from '../NewsFilters/NewsFilters.tsx'
import NewsList from '../NewsList/NewsList.tsx'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper.tsx'
import styles from './NewsByFilters.module.css'

interface IProps {
	isDark: boolean
}

const NewsByFilters = ({ isDark }: IProps) => {
	const dispatch = useAppDispatch()
	const filters = useAppSelector(state => state.news.filters)

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	})

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			dispatch(
				setFilters({
					key: 'page_number',
					value: filters.page_number + 1,
				}),
			)
		}
	}

	const handlePrevPage = () => {
		if (filters.page_number > 1) {
			dispatch(
				setFilters({
					key: 'page_number',
					value: filters.page_number - 1,
				}),
			)
		}
	}

	const handlePage = (pageNumber: number) => {
		dispatch(
			setFilters({
				key: 'page_number',
				value: pageNumber,
			}),
		)
	}

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} />

			<PaginationWrapper
				top={true}
				bottom={true}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePage}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				isDark={isDark}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	)
}

export default NewsByFilters
