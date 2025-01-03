import createElement from "./createElement.js"
import newsItem from "./newsItem.js"

export default function mainNewsInsideNewsWrapper(data){

    if (!data || data.length === 0){
        return ''
    }
    
    let mainNews = createElement('main-news')

    data.forEach(item => {

        let newsItemElement = newsItem(item)
        mainNews.append(newsItemElement)
        
        
    })

    return mainNews
}