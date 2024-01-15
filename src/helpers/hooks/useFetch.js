import { useState } from 'react'
import { useEffect } from 'react'

export const useFetch = (fetchFunc, params) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	const stringParams = params ? new URLSearchParams(params).toString() : ''

	useEffect(() => {
		;(async () => {
			try {
				setIsLoading(true)
				const result = await fetchFunc(params)
				setData(result)
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false)
			}
		})()
	}, [fetchFunc, stringParams])
	return { data, isLoading, error }
}