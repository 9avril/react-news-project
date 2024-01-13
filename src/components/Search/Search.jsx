import style from './Search.module.css'

const Search = ({ keywords, setKeywords }) => {
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
