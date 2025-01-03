import createElement from "./createElement.js";

function newsItem(data){

    console.log(data)
    // console.log(data.title)
    // console.log(data.date)
    // console.log(data.category)
    // console.log(data.url)
    // console.log(data.image)
    // console.log(data.image.src)
    // console.log(data.image.alt)
    let { title, date, category, image, url } = data
    //   paimk situos { viskas kas viduj }     is (is = is kur) (data = kur)

    if (!title || !url){
        return ''
    }

    let element = createElement('news-item')
    let link = document.createElement('a');
    link.href = url
    element.append(link)

    if (image.src){

        let imageWrapper = createElement('news-item-image-wrapper')
        link.append(imageWrapper)
        
        let imageElement = document.createElement('img')
        imageElement.classList.add('news-item-image')
        imageElement.src = image.src
        imageElement.alt = image.alt
        imageWrapper.append(imageElement)
        
    }
    
        let contentWrapper = createElement('news-item-content-wrapper')
        link.append(contentWrapper)
        
    if (category){
        let categoryElement = createElement('news-item-category', category, 'span')
        contentWrapper.append(categoryElement)
    }

    let titleElement = createElement('news-item-title', title, 'h2')
    contentWrapper.append(titleElement)

    if (date){
        let dateElement = createElement('news-item-date', date, 'span')
        contentWrapper.append(dateElement)
    }

    return element
}

export default newsItem

{
    
    /* <div class="news-item">
    <a href="#">
        <div class="news-item-image-wrapper">
            <img src="https://codeacademy.lt/wp-content/uploads/2024/10/kas-yra-dirbtinis-intelektas.jpg" alt="" class="news-item-image">
        </div>
        <div class="news-item-content-wrapper">
            <span class="news-item-category">Technologijos</span>
            <h2 class="news-item-title">Dirbtinis intelektas: viskas, ką norėjote sužinoti</h2>
            <span class="news-item-date">2024-10-30</span>
        </div>
    </a>
</div> */}