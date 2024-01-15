import style from './NewsBanner.module.css'
import { formatTimeAgo } from '../../helpers/formatTimeAgo.js'
import { Image } from '../Image/Image.jsx'
import withSkeleton from '../../helpers/hoc/withSkeleton.jsx'

const NewsBanner = ({ item }) => {
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

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)
export default NewsBannerWithSkeleton
