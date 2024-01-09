import style from './Skeleton.module.css'

const Skeleton = ({count = 1, type = 'banner'}) => {
    return <>
        {count > 1 ? (
            <ul className={style.list}>

                {[...Array(count).map((_, index) => {
                    <li key={index} className={type === 'banner' ? style.banner : style.item}></li>
                })]}
            </ul>
        ) : <li className={type === 'banner' ? style.banner : style.item}></li>}
    </>
}

export default Skeleton