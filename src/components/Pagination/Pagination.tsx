import style from './Pagination.module.css'
import { IPaginationProps } from '../../interfaces'

const Pagination = ({
	totalPages,
	handleNextPage,
	handlePrevPage,
	handlePageClick,
	currentPage,
}: IPaginationProps) => {
	return (
		<div className={style.pagination}>
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
							key={index}
							disabled={index + 1 === currentPage}
							className={style.pageNumber}
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
