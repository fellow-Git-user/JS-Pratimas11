export default function createElement(className, text, elementType = 'div') {
    let element = document.createElement(elementType)

    if (className) {
        element.className = className
    }

    if (text) {
        element.textContent = text
    }

    return element
}

//arba export default createElement