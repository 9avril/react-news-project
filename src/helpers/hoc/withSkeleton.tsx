import Skeleton from '../../components/Skeleton/Skeleton.tsx'
import { ComponentType } from 'react'
import { SkeletonType } from '../../interfaces'
import { DirectionType } from '../../interfaces'

interface IProps {
	isLoading: boolean
}

function withSkeleton<P extends object>(
	Component: ComponentType<P>,
	type?: SkeletonType,
	count?: number,
	direction?: DirectionType,
) {
	return function WithSkeleton(props: IProps & P) {
		const { isLoading, ...restProps } = props
		if (isLoading) {
			return <Skeleton count={count} type={type} direction={direction} />
		}
		return <Component {...(restProps as P)} />
	}
}

export default withSkeleton
