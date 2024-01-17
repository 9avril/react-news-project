import style from './Skeleton.module.css'
import { SkeletonType } from '../../interfaces'
import { DirectionType } from '../../interfaces'

interface IProps {
	type?: SkeletonType
	count?: number
	direction?: DirectionType
}

const Skeleton = ({
	count = 1,
	type = 'banner',
	direction = 'column',
}: IProps) => {
	return (
		<>
			{count > 1 ? (
				<ul
					className={
						direction === 'column'
							? style.columnList
							: style.rowList
					}
				>
					{[...Array(count)].map((_, index) => (
						<li
							key={index}
							className={
								type === 'banner' ? style.banner : style.item
							}
						></li>
					))}
				</ul>
			) : (
				<li
					className={type === 'banner' ? style.banner : style.item}
				></li>
			)}
		</>
	)
}

export default Skeleton
