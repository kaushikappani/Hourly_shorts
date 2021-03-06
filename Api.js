import newsicon from "./assets/icons8-news-96.png"
import businessicon from "./assets/icons8-dollar-64.png"
import enticon from "./assets/icons8-film-64.png"
import healthicon from "./assets/icons8-health-50.png"
import scienceicon from "./assets/icons8-acid-flask-50.png"
import sportsicon from "./assets/icons8-trophy-60.png"
import techicon from "./assets/icons8-artificial-intelligence-96.png"
import newicon from "./assets/icons8-fire-60.png"
export const categories = [
    {
        code: "",
        pic: newicon,
        name: "latest",
    },
    {
        code: "",
        pic: newsicon,
        name: "general",
    },
    {
        code: "",
        pic: businessicon,
        name: "business",
    },
    {
        code: "",
        pic: enticon,
        name: "entertainment",
    },
    {
        pic: healthicon,
        name: "health",
    },
    {
        pic: scienceicon,
        name: "science",
    },
    {
        pic: sportsicon,
        name: "sports",
    },
    {
        pic: techicon,
        name: "technology",
    },
];

export const country = [
    {
        code: "in",
        name: "India",
    },
    {
        code: "us",
        name: "USA",
    },
    {
        code: "au",
        name: "Australia",
    },
    {
        code: "ru",
        name: "Russia",
    },
    {
        code: "fr",
        name: "France",
    },
    {
        code: "gb",
        name: "United Kingdom",
    },
];

export const sources = [
    {
        id: "bbc-news",
        name: "BBC News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    },
    {
        id: "cnn",
        name: "CNN",
        pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
    },
    {
        id: "fox-news",
        name: "Fox News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
    },
    {
        id: "google-news",
        name: "Google News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
    },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "in") => {
    return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
    return `${BASE_URL}/everything/${source}.json`;
};