import createElement from "../components/createElement.js"
import mainNewsContent from "../components/mainNewsContent.js"
import newsSection from "../components/newsSection.js"
import sidebarNewsContent from "../components/sidebarNewsContent.js"
import videoSection from "../components/videoSection.js"

function init(){
let contentElement = document.querySelector('#content')

let containerElement = createElement('container')
contentElement.append(containerElement)

let contentWrapper = createElement('content-wrapper')
containerElement.append(contentWrapper)

let mainContent = mainNewsContent();
contentWrapper.append(mainContent)

let sidebarContent = sidebarNewsContent();
mainContent.after(sidebarContent)


}

init()

