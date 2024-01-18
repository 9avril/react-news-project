import Pagination from '../Pagination/Pagination.tsx'
import { ReactNode } from 'react'
import { IPaginationProps } from '../../interfaces'

interface IProps extends IPaginationProps {
	children: ReactNode
	top?: boolean
	bottom?: boolean
	isDark: boolean
}

const PaginationWrapper = ({
	top,
	bottom,
	children,
	isDark,
	...paginationProps
}: IProps) => {
	return (
		<>
			{top && <Pagination isDark={isDark} {...paginationProps} />}
			{children}
			{bottom && <Pagination isDark={isDark} {...paginationProps} />}
		</>
	)
}

export default PaginationWrapper
