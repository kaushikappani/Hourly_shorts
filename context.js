import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./Api";
export const NewsContext = createContext();

const Context = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("latest");
    const [source, setSource] = useState();
    const [index, setIndex] = useState(1);
    const [darkTheme, setDarkTheme] = useState(true);
    const [activeIndex, setActiveindex] = useState(0)
    const [length, setLength] = useState(0)

    const fetchNews = async (reset = category) => {
        if (category === "latest") {
            setLoading(true);
            const { data } = await axios.get("https://inshorts-news.vercel.app/all");
            setNews(data.data)
            setCategory(reset)
            setActiveindex(0)
            setLength(data.data.length)
            setLoading(false)
            setIndex(1);
        } else {
            setLoading(true)
            const { data } = await axios.get(getNewsAPI(reset));
            setNews(data.articles);
            setCategory(reset)
            setActiveindex(0)
            setLength(data.articles.length)
            setLoading(false)
            setIndex(1);
        }
    };

    useEffect(() => {
        fetchNews()
    }, [category])

    const fetchNewsfromSource = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(getSourceAPI(source));
            setNews(data.articles);
            setLoading(false);
            setActiveindex(0)
            setLength(data.length)
            setIndex(1);
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchNews();
    }, [category]);

    useEffect(() => {
        fetchNewsfromSource();
    }, [source]);

    return (
        <NewsContext.Provider
            value={{
                news,
                setCategory,
                index,
                setIndex,
                setSource,
                darkTheme,
                setDarkTheme,
                fetchNews,
                loading, category, activeIndex, setActiveindex, length
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export default Context;