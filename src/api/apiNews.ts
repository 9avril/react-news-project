import axios from 'axios'
import { ParamsType } from '../interfaces'
import { NewsApiResponse } from '../interfaces'
import { CategoriesApiResponse } from '../interfaces'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_API_URL = import.meta.env.VITE_NEWS_BASE_API_URL

export const getNews = async (
	params?: ParamsType,
): Promise<NewsApiResponse> => {
	try {
		const { page_number, page_size = 13, category, keywords } = params || {}

		const response = await axios.get<NewsApiResponse>(
			`${BASE_API_URL}search`,
			{
				params: {
					apiKey: API_KEY,
					page_number,
					page_size,
					category,
					keywords,
				},
			},
		)
		return response.data
	} catch (error) {
		console.log(error)
		return { news: [], page: 1, status: 'error' }
	}
}

export const getCategories = async (): Promise<CategoriesApiResponse> => {
	try {
		const response = await axios.get<CategoriesApiResponse>(
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
		return { categories: [], description: '', status: 'error' }
	}
}

export const getLatestNews = async (): Promise<NewsApiResponse> => {
	try {
		const response = await axios.get<NewsApiResponse>(
			`${BASE_API_URL}latest-news`,
			{
				params: {
					apiKey: API_KEY,
				},
			},
		)
		return response.data
	} catch (error) {
		console.log(error)
		return { news: [], page: 1, status: 'error' }
	}
}
