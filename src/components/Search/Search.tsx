import style from './Search.module.css'
import { useTheme } from '../../context/ThemeContext.tsx'

interface IProps {
	keywords: string
	setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: IProps) => {
	const { isDark } = useTheme()
	return (
		<div className={`${style.search} ${isDark ? style.dark : style.light}`}>
			<input
				type={'text'}
				value={keywords}
				onChange={e => setKeywords(e.target.value)}
				className={style.input}
				placeholder={'Javascript'}
			/>
		</div>
	)
}

export default Search
