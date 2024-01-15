import style from './NewsList.module.css'
import NewsItem from '../NewsItem/NewsItem.jsx'
import withSkeleton from '../../helpers/hoc/withSkeleton.jsx'

const NewsList = ({ news }) => {
	return (
		<ul className={style.list}>
			{news.map(item => {
				return <NewsItem key={item.id} item={item} />
			})}
		</ul>
	)
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)
export default NewsListWithSkeleton
