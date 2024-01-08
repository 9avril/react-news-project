import style from './NewsBanner.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
import {Image} from "../Image/Image.jsx";

export const NewsBanner = ({item}) => {
    return (
        <div className={style.banner}>
            <Image image={item?.image}/>
            <h3 className={style.title}>{item.title}</h3>
            <p className={style.date}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    );
};