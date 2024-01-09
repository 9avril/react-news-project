import style from './Main.module.css'
import {NewsBanner} from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect} from "react";
import {useState} from "react";
import {getNews} from "../../api/apiNews.js";
import {NewsList} from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

export const Main = () => {

    const [news, setNews] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsloading(true)
                const response = await getNews()
                setNews(response.news)
                setIsloading(false)
            } catch
                (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, []);

    return (
        <main className={style.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type={'banner'}/>}
            {!isLoading ? <NewsList news={news}/> : <Skeleton count={20} type={'item'}/>}
        </main>
    );
};