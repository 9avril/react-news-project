import Pagination from '../Pagination/Pagination.tsx'
import { ReactNode } from 'react'
import { IPaginationProps } from '../../interfaces'

interface IProps extends IPaginationProps {
	children: ReactNode
	top?: boolean
	bottom?: boolean
}

const PaginationWrapper = ({
	top,
	bottom,
	children,
	...paginationProps
}: IProps) => {
	return (
		<>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	)
}

export default PaginationWrapper
