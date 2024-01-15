import style from './Main.module.css'
import LatestNews from '../../components/LatestNews/LatestNews.jsx'
import { useFilters } from '../../helpers/hooks/useFilters.js'
import { PAGE_SIZE } from '../../constants/constants.js'
import { useDebounce } from '../../helpers/hooks/useDebounce.js'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.jsx'
import { useFetch } from '../../helpers/hooks/useFetch.js'
import { getNews } from '../../api/apiNews.js'

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

	return (
		<main className={style.main}>
			<LatestNews isLoading={isLoading} banners={data && data.news} />
			<NewsByFilters
				news={data?.news}
				isLoading={isLoading}
				filters={filters}
				changeFilters={changeFilters}
			/>
		</main>
	)
}
