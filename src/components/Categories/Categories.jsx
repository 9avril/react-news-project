import style from './Categories.module.css'
import { forwardRef } from 'react'

const Categories = forwardRef(
	({ categories, setSelectedCategory, selectedCategory }, ref) => {
		return (
			<div ref={ref} className={style.categories}>
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
	},
)

Categories.displayName = 'Categories'

export default Categories
