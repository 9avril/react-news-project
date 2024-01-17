import style from './Image.module.css'

interface IProps {
	image: string
}

export const Image = ({ image }: IProps) => {
	return (
		<div className={style.wrapper}>
			{image ? (
				<img className={style.image} src={image} alt={'news'} />
			) : null}
		</div>
	)
}
