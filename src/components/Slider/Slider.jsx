import { useRef } from 'react'
import React from 'react'
import style from './Slider.module.css'

const Slider = ({ children, step = 200 }) => {
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
		<div className={style.slider}>
			<button onClick={scrollLeft} className={style.arrow}>{`<`}</button>
			{React.cloneElement(children, { ref: sliderRef })}
			<button onClick={scrollRight} className={style.arrow}>{`>`}</button>
		</div>
	)
}

export default Slider
