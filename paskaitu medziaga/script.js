// DOM - Document Object Model

// Paselektinti HTML elementą
let paragraph = document.querySelector('p')
// paragraph.textContent = 'Good morning'
paragraph.innerHTML = 'Good <span style="color: red;">morning</span>'

// Sukurti HTML elementą
let spanElement = document.createElement('span')
spanElement.textContent = '!'

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement)

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement)

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement)

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement)

// Remove - pašalina HTML elementą
spanElement.remove()

let newParagraph = document.createElement('p')
newParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, nostrum quibusdam! Accusamus alias deserunt consectetur, inventore esse pariatur, libero magni dolore labore voluptatum rem dolor incidunt mollitia veniam minus non.'

paragraph.after(newParagraph)

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase'

// newParagraph.className = 'antra-klase'
// newParagraph.className = newParagraph.className + ' antra-klase'
newParagraph.className += ' antra-klase'

// Prideda klasę prie HTML elemento
newParagraph.classList.add('trecia-klase')
newParagraph.classList.add('ketvirta-klase', 'penkta-klase')

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('pirma-klase')
newParagraph.classList.remove('antra-klase', 'trecia-klase')

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('ketvirta-klase', 'sesta-klase')

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase') // prideda
newParagraph.classList.toggle('toggle-klase') // pasalina
newParagraph.classList.toggle('toggle-klase') // prideda

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('pirma-klase'))
console.log(newParagraph.classList.contains('sesta-klase'))

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id'

let link = document.createElement('a')
link.textContent = 'nuoroda'
newParagraph.after(link)
link.classList.add('nuorodos-klase')

// link.href = 'https://www.google.com'
// link.target = '_blank'
// link.title = 'cia yra nuoroda'

// link['href'] = 'https://www.google.com'
// link['target'] = '_blank'
// link['title'] = 'cia yra nuoroda'

link.setAttribute('href', 'https://www.google.com')
link.setAttribute('target', '_blank')
link.setAttribute('title', 'cia yra nuoroda')

// console.log(link.href)
// console.log(link['href'])
// console.log(link.getAttribute('href'))

link.removeAttribute('title')

// link.style = `color: white; 
//               background-color: green; 
//               display: inline-block; 
//               padding: 5px 10px; 
//               text-transform: uppercase; 
//               text-decoration: none;`

link.style.borderRadius = '10px'
link.style.color = 'white'
link.style.backgroundColor = 'green'
link.style.display = 'inline-block'
link.style.padding = '5px 10px'
link.style.textTransform = 'uppercase'
link.style.textDecoration = 'none'

let anotherLink = document.createElement('a')
anotherLink.textContent = 'kita nuoroda'
anotherLink.classList.add('link-primary')
anotherLink.href = '/'
link.after(anotherLink)



let contentElement = document.querySelector('#content')
contentElement.append(renderItemElement('Pavadinimas 1', 'Aprasymas 1', '/puslapis-1.html'))
contentElement.append(renderItemElement('Pavadinimas 2', 'Aprasymas 2', '/puslapis-2.html'))
contentElement.append(renderItemElement('Pavadinimas 3', 'Aprasymas 3', '/puslapis-3.html'))
contentElement.append(renderItemElement('Pavadinimas 4', 'Aprasymas 4', '/puslapis-4.html'))

function renderItemElement(title, description, url) {
    let itemElement = document.createElement('div')
    itemElement.classList.add('item')
    
    let titleElement = document.createElement('h2')
    titleElement.classList.add('item-title')
    titleElement.textContent = title
    itemElement.append(titleElement)
    
    let itemDescriptionElement = document.createElement('p')
    itemDescriptionElement.textContent = description
    itemDescriptionElement.classList.add('item-description')
    itemElement.append(itemDescriptionElement)
    
    let itemLinkElement = document.createElement('a')
    itemLinkElement.textContent = 'Skaityti daugiau'
    itemLinkElement.classList.add('item-link')
    itemLinkElement.href = url
    itemElement.append(itemLinkElement)

    return itemElement
}

// querySelectorAll
let liElements = document.querySelectorAll('li')
console.log(liElements)

liElements.forEach(liElement => {
    if (liElement.textContent.length > 4) {
        liElement.style.color = 'red'
    }
})
