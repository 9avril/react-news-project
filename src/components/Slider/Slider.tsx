import { useRef } from 'react'
import React from 'react'
import style from './Slider.module.css'

interface IProps {
	children: React.ReactElement
	step?: number
	isDark: boolean
}

const Slider = ({ children, step = 200, isDark }: IProps) => {
	const sliderRef = useRef(null)

	const scrollLeft = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft -= step
	}

	const scrollRight = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft += step
	}

	return (
		<div className={`${style.slider} ${isDark ? style.dark : style.light}`}>
			<button onClick={scrollLeft} className={style.arrow}>{`<`}</button>
			{React.cloneElement(children, { ref: sliderRef })}
			<button onClick={scrollRight} className={style.arrow}>{`>`}</button>
		</div>
	)
}

export default Slider
