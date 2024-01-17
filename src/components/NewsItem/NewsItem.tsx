import style from './NewsItem.module.css'
import { formatTimeAgo } from '../../helpers/formatTimeAgo.ts'
import { INews } from '../../interfaces'

interface IProps {
	item: INews
}

const NewsItem = ({ item }: IProps) => {
	return (
		<li className={style.item}>
			<div
				className={style.wrapper}
				style={{ backgroundImage: `url(${item.image})` }}
			></div>
			<div className={style.info}>
				<h3 className={style.title}>{item.title}</h3>
				<p className={style.date}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	)
}

export default NewsItem
