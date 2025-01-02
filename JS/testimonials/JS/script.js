let content = document.querySelector('#content');

let container = document.createElement('div');
container.classList.add('container');
content.append(container);

let testimonialsWrapper = document.createElement('div');
testimonialsWrapper.classList.add('testimonials-wrapper');
container.append(testimonialsWrapper)

let mainTestimonials = document.createElement('div');
mainTestimonials.classList.add('main-testimonials');
testimonialsWrapper.append(mainTestimonials)

let testimonialItem1 = document.createElement('div');
testimonialItem1.classList.add('testimonial-item');
mainTestimonials.append(testimonialItem1)

let testimonialAuthorWrapper1 = document.createElement('div');
testimonialAuthorWrapper1.classList.add('testimonial-author-wrapper');
testimonialItem1.append(testimonialAuthorWrapper1);

let testimonialImageWrapper1 = document.createElement('div');
testimonialImageWrapper1.classList.add('testimonial-image-wrapper');
testimonialAuthorWrapper1.append(testimonialImageWrapper1)

let danielImage = document.createElement('img');
danielImage.src = 'image-daniel.jpg'
testimonialImageWrapper1.append(danielImage)

let testimonialAuthorInfo1 = document.createElement('div');
testimonialAuthorInfo1.classList.add('testimonial-author-info');
testimonialAuthorWrapper1.append(testimonialAuthorInfo1)

let testimonialAuthorName1 = document.createElement('span');
testimonialAuthorName1.classList.add('testimonial-author-name');
testimonialAuthorName1.textContent = 'Daniel Clifford';
testimonialAuthorInfo1.append(testimonialAuthorName1)

let testimonialAuthorVerified1 = document.createElement('span');
testimonialAuthorVerified1.classList.add('testimonial-author-verified');
testimonialAuthorVerified1.textContent = 'Verified Graduate';
testimonialAuthorInfo1.append(testimonialAuthorVerified1)

let testimonialTitle1 = document.createElement('h2');
testimonialTitle1.classList.add('testimonial-title');
testimonialTitle1.textContent = 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.'
testimonialAuthorWrapper1.after(testimonialTitle1)

let testimonialDescription1 = document.createElement('p');
testimonialDescription1.classList.add('testimonial-description');
testimonialDescription1.textContent = 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.'
testimonialTitle1.after(testimonialDescription1)


let testimonialItem2 = document.createElement('div');
testimonialItem2.classList.add('testimonial-item');
mainTestimonials.append(testimonialItem2)

let testimonialAuthorWrapper2 = document.createElement('div');
testimonialAuthorWrapper2.classList.add('testimonial-author-wrapper');
testimonialItem2.append(testimonialAuthorWrapper2);

let testimonialImageWrapper2 = document.createElement('div');
testimonialImageWrapper2.classList.add('testimonial-image-wrapper');
testimonialAuthorWrapper2.append(testimonialImageWrapper2)

let jonathanImage = document.createElement('img');
jonathanImage.src = 'image-jonathan.jpg'
testimonialImageWrapper2.append(jonathanImage)

let testimonialAuthorInfo2 = document.createElement('div');
testimonialAuthorInfo2.classList.add('testimonial-author-info');
testimonialAuthorWrapper2.append(testimonialAuthorInfo2)

let testimonialAuthorName2 = document.createElement('span');
testimonialAuthorName2.classList.add('testimonial-author-name');
testimonialAuthorName2.textContent = 'Jonathan Walters';
testimonialAuthorInfo2.append(testimonialAuthorName2)

let testimonialAuthorVerified2 = document.createElement('span');
testimonialAuthorVerified2.classList.add('testimonial-author-verified');
testimonialAuthorVerified2.textContent = 'Verified Graduate';
testimonialAuthorInfo2.append(testimonialAuthorVerified2)

let testimonialTitle2 = document.createElement('h2');
testimonialTitle2.classList.add('testimonial-title');
testimonialTitle2.textContent = 'The team was very supportive and kept me motivated'
testimonialAuthorWrapper2.after(testimonialTitle2)

let testimonialDescription2 = document.createElement('p');
testimonialDescription2.classList.add('testimonial-description');
testimonialDescription2.textContent = 'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.'
testimonialTitle2.after(testimonialDescription2)

let testimonialItem3 = document.createElement('div');
testimonialItem3.classList.add('testimonial-item');
mainTestimonials.append(testimonialItem3)

let testimonialAuthorWrapper3 = document.createElement('div');
testimonialAuthorWrapper3.classList.add('testimonial-author-wrapper');
testimonialItem3.append(testimonialAuthorWrapper3);

let testimonialImageWrapper3 = document.createElement('div');
testimonialImageWrapper3.classList.add('testimonial-image-wrapper');
testimonialAuthorWrapper3.append(testimonialImageWrapper3)

let jeanetteImage = document.createElement('img');
jeanetteImage.src = 'image-jeanette.jpg'
testimonialImageWrapper3.append(jeanetteImage)

let testimonialAuthorInfo3 = document.createElement('div');
testimonialAuthorInfo3.classList.add('testimonial-author-info');
testimonialAuthorWrapper3.append(testimonialAuthorInfo3)

let testimonialAuthorName3 = document.createElement('span');
testimonialAuthorName3.classList.add('testimonial-author-name');
testimonialAuthorName3.textContent = 'Jeanette Harmon';
testimonialAuthorInfo3.append(testimonialAuthorName3)

let testimonialAuthorVerified3 = document.createElement('span');
testimonialAuthorVerified3.classList.add('testimonial-author-verified');
testimonialAuthorVerified3.textContent = 'Verified Graduate';
testimonialAuthorInfo3.append(testimonialAuthorVerified3)

let testimonialTitle3 = document.createElement('h2');
testimonialTitle3.classList.add('testimonial-title');
testimonialTitle3.textContent = 'An overall wonderful and rewarding experience'
testimonialAuthorWrapper3.after(testimonialTitle3)

let testimonialDescription3 = document.createElement('p');
testimonialDescription3.classList.add('testimonial-description');
testimonialDescription3.textContent = 'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.'
testimonialTitle3.after(testimonialDescription3)

let testimonialItem4 = document.createElement('div');
testimonialItem4.classList.add('testimonial-item');
mainTestimonials.append(testimonialItem4)

let testimonialAuthorWrapper4 = document.createElement('div');
testimonialAuthorWrapper4.classList.add('testimonial-author-wrapper');
testimonialItem4.append(testimonialAuthorWrapper4);

let testimonialImageWrapper4 = document.createElement('div');
testimonialImageWrapper4.classList.add('testimonial-image-wrapper');
testimonialAuthorWrapper4.append(testimonialImageWrapper4)

let patrickImage = document.createElement('img');
patrickImage.src = 'image-patrick.jpg'
testimonialImageWrapper4.append(patrickImage)

let testimonialAuthorInfo4 = document.createElement('div');
testimonialAuthorInfo4.classList.add('testimonial-author-info');
testimonialAuthorWrapper4.append(testimonialAuthorInfo4)

let testimonialAuthorName4 = document.createElement('span');
testimonialAuthorName4.classList.add('testimonial-author-name');
testimonialAuthorName4.textContent = 'Patrick Abrams';
testimonialAuthorInfo4.append(testimonialAuthorName4)

let testimonialAuthorVerified4 = document.createElement('span');
testimonialAuthorVerified4.classList.add('testimonial-author-verified');
testimonialAuthorVerified4.textContent = 'Verified Graduate';
testimonialAuthorInfo4.append(testimonialAuthorVerified4)

let testimonialTitle4 = document.createElement('h2');
testimonialTitle4.classList.add('testimonial-title');
testimonialTitle4.textContent = 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.'
testimonialAuthorWrapper4.after(testimonialTitle4)

let testimonialDescription4 = document.createElement('p');
testimonialDescription4.classList.add('testimonial-description');
testimonialDescription4.textContent = 'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.'
testimonialTitle4.after(testimonialDescription4)


let secondaryTestimonials = document.createElement('div');
secondaryTestimonials.classList.add('secondary-testimonials');
testimonialsWrapper.append(secondaryTestimonials)

let testimonialITem5 = document.createElement('div');
testimonialITem5.classList.add('testimonial-item');
secondaryTestimonials.append(testimonialITem5);

let testimonialAuthorWrapper5 = document.createElement('div');
testimonialAuthorWrapper5.classList.add('testimonial-author-wrapper');
testimonialITem5.append(testimonialAuthorWrapper5);

let testimonialImageWrapper5 = document.createElement('div');
testimonialImageWrapper5.classList.add('testimonial-image-wrapper');
testimonialAuthorWrapper5.append(testimonialImageWrapper5);

let kiraImage = document.createElement('img');
kiraImage.src = 'image-kira.jpg';
testimonialImageWrapper5.append(kiraImage)

let testimonialAuthorInfo5 = document.createElement('div');
testimonialAuthorInfo5.classList.add('testimonial-author-info');
testimonialImageWrapper5.after(testimonialAuthorInfo5)

let testimonialAuthorName5 = document.createElement('span');
testimonialAuthorName5.classList.add('testimonial-author-name');
testimonialAuthorName5.textContent = 'Kira Whittle';
testimonialAuthorInfo5.append(testimonialAuthorName5);

let testimonialAuthorVerified5 = document.createElement('span');
testimonialAuthorVerified5.classList.add('testimonial-author-verified');
testimonialAuthorVerified5.textContent = 'Verified Graduate';
testimonialAuthorInfo5.append(testimonialAuthorVerified5);

let testimonialTitle5 = document.createElement('h2');
testimonialTitle5.classList.add('testimonial-title');
testimonialTitle5.textContent = 'Such a life-changing experience. Highly recommended!'
testimonialAuthorWrapper5.after(testimonialTitle5)

let testimonialDescription5 = document.createElement('p');
testimonialDescription5.classList.add('testimonial-description');
testimonialDescription5.textContent = 'Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! '
testimonialTitle5.after(testimonialDescription5)









//https://github.com/ca-type-25/paskaitos/blob/main/2024-11-18-responsive/images/image-daniel.jpg
// https://github.com/ca-type-25/paskaitos/blob/main/2024-11-18-responsive/images/image-jonathan.jpg
// https://github.com/ca-type-25/paskaitos/blob/main/2024-11-18-responsive/images/image-jeanette.jpg
// https://github.com/ca-type-25/paskaitos/blob/main/2024-11-18-responsive/images/image-patrick.jpg
// https://github.com/ca-type-25/paskaitos/blob/main/2024-11-18-responsive/images/image-kira.jpg