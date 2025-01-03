import { NEWS_LIST, SECTION_TITLE } from "../newsData.js";
import createElement from "./createElement.js";
import largeLink from "./largeLink.js";
import mainNewsInsideNewsWrapper from "./mainNewsInsideNewsWrapper.js";
import secondaryNewsSection from "./secondaryNewsSection.js";

export default function newsSection(){
let sectionElement = createElement('news-section', '', 'section');
let moreNewsLink = largeLink('Visos naujienos', '#');
sectionElement.append(moreNewsLink);

let pageTitle = createElement('page-title section-title', SECTION_TITLE, 'h1');
sectionElement.prepend(pageTitle);

let newsWrapperElement = createElement('news-wrapper');


let mainNewsData = NEWS_LIST.slice(0, 2);
let mainNews = mainNewsInsideNewsWrapper(mainNewsData);

let secondaryNewsData = NEWS_LIST.slice(2)
let secondaryNews = secondaryNewsSection(secondaryNewsData);

sectionElement.append(newsWrapperElement, mainNews, secondaryNews)

return sectionElement

}