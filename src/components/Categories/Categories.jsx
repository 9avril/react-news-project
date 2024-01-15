import style from './Categories.module.css'

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
	return (
		<div className={style.categories}>
			<button
				onClick={() => setSelectedCategory(null)}
				className={!selectedCategory ? style.active : style.item}
			>
				All
			</button>
			{categories.map(category => {
				return (
					<button
						onClick={() => setSelectedCategory(category)}
						className={
							selectedCategory === category
								? style.active
								: style.item
						}
						key={category}
					>
						{category}
					</button>
				)
			})}
		</div>
	)
}

export default Categories
