import style from './Categories.module.css'
import { forwardRef } from 'react'
import { ForwardedRef } from 'react'
import { CategoriesType } from '../../interfaces'

interface IProps {
	categories: CategoriesType[]
	setSelectedCategory: (category: CategoriesType | null) => void
	selectedCategory: CategoriesType | null
}

const Categories = forwardRef(
	(
		{ categories, setSelectedCategory, selectedCategory }: IProps,
		ref: ForwardedRef<HTMLDivElement>,
	) => {
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
