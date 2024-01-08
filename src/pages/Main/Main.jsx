import style from './Main.module.css'
import {NewsBanner} from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect} from "react";
import {useState} from "react";
import {getNews} from "../../api/apiNews.js";
import {NewsList} from "../../components/NewsList/NewsList.jsx";

export const Main = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
            } catch
                (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, []);

    return (
        <main className={style.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}
            <NewsList news={news}/>
        </main>
    );
};