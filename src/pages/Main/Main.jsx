import { useEffect, useState } from 'react'
import { getCategories, getNews } from '../../api/apiNews.js'
import Categories from '../../components/Categories/Categories.jsx'
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx'
import { NewsList } from '../../components/NewsList/NewsList.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import Skeleton from '../../components/Skeleton/Skeleton.jsx'
import style from './Main.module.css'

export const Main = () => {
	const [news, setNews] = useState([])
	const [categories, setCategories] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [isLoading, setIsloading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)

	const totalPage = 10
	const pageSize = 10

	const fetchNews = async currentPage => {
		try {
			setIsloading(true)
			const response = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectedCategory === 'All' ? null : selectedCategory,
			})
			setNews(response.news)
			setIsloading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchCategories = async () => {
		try {
			const response = await getCategories()
			setCategories(['All', ...response.categories])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchCategories()
	}, [])

	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage, selectedCategory])

	const handleNextPage = () => {
		if (currentPage < totalPage) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handlePage = pageNumber => {
		setCurrentPage(pageNumber)
	}

	return (
		<main className={style.main}>
			<Categories
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>

			{news.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton count={1} type={'banner'} />
			)}

			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePage}
				currentPage={currentPage}
				totalPages={totalPage}
			/>

			{isLoading ? (
				<Skeleton count={20} type={'item'} />
			) : (
				<NewsList news={news} />
			)}

			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePage}
				currentPage={currentPage}
				totalPages={totalPage}
			/>
		</main>
	)
}
