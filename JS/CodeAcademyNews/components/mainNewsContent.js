import createElement from "./createElement.js";
import newsSection from "./newsSection.js";
import videoSection from "./videoSection.js";

export default function mainNewsContent(){
let mainContent = createElement('main-content', '', 'main')

let newsSectionElement = newsSection();
let videoSectionElement = videoSection();
mainContent.append(newsSectionElement, videoSectionElement)


return mainContent
}