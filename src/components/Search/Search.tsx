import style from './Search.module.css'

interface IProps {
	keywords: string
	setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: IProps) => {
	return (
		<div className={style.search}>
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
