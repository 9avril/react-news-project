import style from './NewsList.module.css'
import NewsItem from '../NewsItem/NewsItem.tsx'
import withSkeleton from '../../helpers/hoc/withSkeleton.tsx'
import { INews } from '../../interfaces'

interface IProps {
	news?: INews[]
}

const NewsList = ({ news }: IProps) => {
	return (
		<ul className={style.list}>
			{news?.map(item => {
				return <NewsItem key={item.id} item={item} />
			})}
		</ul>
	)
}

const NewsListWithSkeleton = withSkeleton<IProps>(NewsList, 'item', 10)
export default NewsListWithSkeleton
