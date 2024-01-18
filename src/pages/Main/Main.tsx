import style from './Main.module.css'
import LatestNews from '../../components/LatestNews/LatestNews.tsx'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.tsx'

interface IProps {
	isDark: boolean
}

export const Main = ({ isDark }: IProps) => {
	return (
		<main className={style.main}>
			<LatestNews />
			<NewsByFilters isDark={isDark} />
		</main>
	)
}
