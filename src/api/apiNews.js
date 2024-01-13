import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_API_URL = import.meta.env.VITE_NEWS_BASE_API_URL

export const getNews = async ({ page_number, page_size, category, keywords }) => {
	try {
		const response = await axios.get(`${BASE_API_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number,
				page_size,
				category,
				keywords,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const getCategories = async () => {
	try {
		const response = await axios.get(
			`${BASE_API_URL}available/categories`,
			{
				params: {
					apiKey: API_KEY,
				},
			},
		)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
