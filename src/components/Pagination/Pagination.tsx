import style from './Pagination.module.css'
import { IPaginationProps } from '../../interfaces'
import { useTheme } from '../../context/ThemeContext.tsx'

const Pagination = ({
	totalPages,
	handlePrevPage,
	handleNextPage,
	handlePageClick,
	currentPage,
}: IPaginationProps) => {
	const { isDark } = useTheme()
	return (
		<div
			className={`${style.pagination} ${isDark ? style.dark : style.light}`}
		>
			<button
				disabled={currentPage <= 1}
				onClick={handlePrevPage}
				className={style.arrow}
			>
				{'<'}
			</button>
			<div className={style.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							onClick={() => handlePageClick(index + 1)}
							className={style.pageNumber}
							disabled={index + 1 === currentPage}
							key={index}
						>
							{index + 1}
						</button>
					)
				})}
			</div>

			<button
				disabled={currentPage >= totalPages}
				onClick={handleNextPage}
				className={style.arrow}
			>
				{'>'}
			</button>
		</div>
	)
}

export default Pagination
