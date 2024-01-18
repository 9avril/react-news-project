import { useState } from 'react'
import { useEffect } from 'react'

interface IFetchFunction<P, T> {
	(params?: P): Promise<T>
}

interface IFetchFuncResult<T> {
	data: T | null | undefined
	isLoading: boolean
	error: Error | null | unknown
}

export const useFetch = <T, P>(
	fetchFunc: IFetchFunction<P, T>,
	params?: P,
): IFetchFuncResult<T> => {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | unknown>(null)

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
