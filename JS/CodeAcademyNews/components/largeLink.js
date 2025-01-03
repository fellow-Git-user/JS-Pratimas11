
function largeLink(text, link){
    if(!text || !link){
        return ''
    }
let linkElement = document.createElement('a');
linkElement.href = link
linkElement.classList.add('button-large');
linkElement.textContent = text


return linkElement
}
export default largeLink

// <a href="#" class="button-large">Visos naujienos</a>
