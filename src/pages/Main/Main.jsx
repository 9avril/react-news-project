import style from './Main.module.css'
import LatestNews from '../../components/LatestNews/LatestNews.jsx'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.jsx'

export const Main = () => {
	return (
		<main className={style.main}>
			<LatestNews />
			<NewsByFilters />
		</main>
	)
}
