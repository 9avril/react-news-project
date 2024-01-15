import withSkeleton from '../../helpers/hoc/withSkeleton.jsx'
import style from './BannersList.module.css'
import NewsBanner from '../NewsBanner/NewsBanner.jsx'

const BannersList = ({ banners }) => {
	return (
		<ul className={style.banners}>
			{banners?.map(banner => {
				return <NewsBanner key={banner.id} item={banner} />
			})}
		</ul>
	)
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')
export default BannersListWithSkeleton
