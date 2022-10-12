import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";

const API_KEY_NEWS = 'ccaa9497c2404e869f27578f6c5dc1ca'
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines'
const NewsViewer = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(NEWS_API_URL + '?country=jp&apikey=' + API_KEY_NEWS)
    .then(res => res.json())
    .then(data => {
      console.log('取得データ', data);
      setNews(data.articles);
    })
    .catch(err => {
      console.log('エラー発生', err);
    })
  }, [])

  if(!news) {
    return (<div>News取得中です...!</div>)
  } else {
    return (
      <div>
        <NewsItem article={news[0]} />
        <NewsItem article={news[1]} />
        <NewsItem article={news[2]} />
      </div>
    )
  }
}
export default NewsViewer;