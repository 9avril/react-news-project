import withSkeleton from '../../helpers/hoc/withSkeleton.tsx'
import style from './BannersList.module.css'
import NewsBanner from '../NewsBanner/NewsBanner.tsx'
import { INews } from '../../interfaces'

interface IProps {
	banners?: INews[] | null
}

const BannersList = ({ banners }: IProps) => {
	return (
		<ul className={style.banners}>
			{banners?.map(banner => {
				return <NewsBanner key={banner.id} item={banner} />
			})}
		</ul>
	)
}

const BannersListWithSkeleton = withSkeleton<IProps>(
	BannersList,
	'banner',
	10,
	'row',
)
export default BannersListWithSkeleton
