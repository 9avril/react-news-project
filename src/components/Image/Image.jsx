import style from './Image.module.css'

export const Image = ({image}) => {
    return (
        <div className={style.wrapper}>
            {image ? <img className={style.image} src={image} alt={'news'}/> : null}
        </div>
    );
};