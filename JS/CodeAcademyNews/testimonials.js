const MAIN_TESTIMONIALS_DATA = [
    {
        title: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
        description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
        name: 'Daniel Clifford', 
        imageSrc: 'images/image-daniel.jpg', 
        imageAlt: '', 
        verified: true
    },
    {
        title: 'The team was very supportive and kept me motivated',
        description: 'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.',
        name: 'Jonathan Walters', 
        imageSrc: 'images/image-jonathan.jpg', 
        imageAlt: '', 
        verified: true
    },
    {
        title: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
        description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
        name: 'Daniel Clifford', 
        imageSrc: 'images/image-daniel.jpg', 
        imageAlt: '', 
        verified: true
    },
    {
        title: 'The team was very supportive and kept me motivated',
        description: 'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.',
        name: 'Jonathan Walters', 
        imageSrc: 'images/image-jonathan.jpg', 
        imageAlt: '', 
        verified: true
    },
]

const SECONDARY_TESTIMONIALS_DATA = [
    {
        description: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
        name: 'Daniel Clifford', 
        imageSrc: 'images/image-daniel.jpg', 
        imageAlt: '', 
        verified: true
    }
]

function init() {
    let content = document.querySelector('#content')

    if (MAIN_TESTIMONIALS_DATA.length === 0 && SECONDARY_TESTIMONIALS_DATA.length === 0) {
        return ''
    }

    let container = createElement('container')
    content.append(container)
    
    let testimonialsWrapper = createElement('testimonials-wrapper')
    container.append(testimonialsWrapper)
    
    let mainTestimonials = createMainTestimonialsComponent(MAIN_TESTIMONIALS_DATA)
    testimonialsWrapper.append(mainTestimonials)
    
    let secondaryTestimonials = createSecondaryTestimonialsComponent(SECONDARY_TESTIMONIALS_DATA)
    testimonialsWrapper.append(secondaryTestimonials)
}

init()

function createMainTestimonialsComponent(testimonialsData) {
    if (!testimonialsData || testimonialsData.length === 0) {
        return ''
    }

    let mainTestimonials = createElement('main-testimonials')

    testimonialsData.forEach(testimonialData => {
        let testimonialItem = createTestimonialItem(testimonialData)
        mainTestimonials.append(testimonialItem)
    })

    return mainTestimonials
}

function createSecondaryTestimonialsComponent(testimonialsData) {
    if (!testimonialsData || testimonialsData.length === 0) {
        return ''
    }

    let secondaryTestimonials = createElement('secondary-testimonials')

    let sectionTitle = createElement('section-title', 'More testimonials:', 'h2')
    secondaryTestimonials.append(sectionTitle)
    
    testimonialsData.forEach(testimonialData => {
        let testimonialItem = createTestimonialItem(testimonialData)
        secondaryTestimonials.append(testimonialItem)
    })

    return secondaryTestimonials
}

function createTestimonialItem(data) {
    let { title, description, name, imageSrc, imageAlt, verified } = data

    if (!name || !description) {
        return ''
    }

    let itemElement = createElement('testimonial-item')
    
    let authorWrapper = createElement('testimonial-author-wrapper')
    itemElement.append(authorWrapper)
    
    if (imageSrc) {
        let imageWrapper = createElement('testimonial-image-wrapper')
        authorWrapper.append(imageWrapper)

        let imageElement = document.createElement('img')
        imageElement.src = imageSrc

        if (imageAlt) {
            imageElement.alt = imageAlt
        }

        imageWrapper.append(imageElement)
    }
    
    let authorInfo = createElement('testimonial-author-info')
    authorWrapper.append(authorInfo)
    
    if (name) {
        let authorName = createElement('testimonial-author-name', name, 'span')
        authorInfo.append(authorName)
    }

    // let authorVerified = createElement(
    //     'testimonial-author-verified', 
    //     verified ? 'Verified Graduate' : 'Not Verified', 
    //     'span'
    // )

    let verifiedText = verified ? 'Verified Graduate' : 'Not Verified'
    let authorVerified = createElement('testimonial-author-verified', verifiedText, 'span')
    authorInfo.append(authorVerified)
    
    if (title) {
        let titleElement = createElement('testimonial-title', title, 'h2')
        itemElement.append(titleElement)
    }
    
    if (description) {
        let descriptionElement = createElement('testimonial-description', description, 'p')
        itemElement.append(descriptionElement)
    }

    return itemElement
}

function createElement(className, text, elementType = 'div') {
    let element = document.createElement(elementType)

    if (className) {
        element.classList.add(className)
    }

    if (text) {
        element.textContent = text
    }

    return element
}