import { useState } from 'react'
import { PAGE_SIZE } from '../../constants/constants.js'

export const useFilters = initFilters => {
	const [filters, setFilters] = useState({ initFilters })

	const changeFilters = (key, value) => {
		setFilters(prev => {
			return { ...prev, [key]: value }
		})
	}
	return { filters, changeFilters }
}
