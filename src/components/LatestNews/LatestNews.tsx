import { useGetLatestNewsQuery } from '../../store/sevices/newsApi.ts'
import BannersList from '../BannersList/BannersList.tsx'
import styles from './LatestNews.module.css'

const LatestNews = ({}) => {
	// const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews)

	const { data, isLoading } = useGetLatestNewsQuery(null)

	return (
		<section className={styles.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}

export default LatestNews
