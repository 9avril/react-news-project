import style from './NewsBanner.module.css'
import { formatTimeAgo } from '../../helpers/formatTimeAgo.ts'
import { Image } from '../Image/Image.tsx'
import { INews } from '../../interfaces'

interface IProps {
	item: INews
}
const NewsBanner = ({ item }: IProps) => {
	return (
		<div className={style.banner}>
			<Image image={item?.image} />
			<h3 className={style.title}>{item.title}</h3>
			<p className={style.date}>
				{formatTimeAgo(item.published)} by {item.author}
			</p>
		</div>
	)
}
export default NewsBanner
