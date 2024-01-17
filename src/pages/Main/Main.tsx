import style from './Main.module.css'
import LatestNews from '../../components/LatestNews/LatestNews.tsx'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.tsx'

export const Main = () => {
	return (
		<main className={style.main}>
			<LatestNews />
			<NewsByFilters />
		</main>
	)
}
