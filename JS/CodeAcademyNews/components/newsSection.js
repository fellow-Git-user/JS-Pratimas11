import createElement from "./createElement.js";
import largeLink from "./largeLink.js";

export default function newsSection(){
let sectionElement = createElement('news-section', '', 'section')
let moreNewsLink = largeLink('Visos naujienos', '#')
sectionElement.append(moreNewsLink)

let pageTitle = createElement('page-title section-title', 'Naujienos', 'h1');
sectionElement.prepend(pageTitle)

return sectionElement

}