// TYPING - HEADER

let typeDestination = document.getElementById('cet');
var i = 0;
var txt = 'Crafting experiences that ';
var speed = 150;

function typeOnce() {
    if (i < txt.length) {
        typeDestination.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeOnce, speed);
    } else {
        setTimeout(function() {
            typeDestination.classList.remove('ticked')

            var elements = document.getElementsByClassName('txt-rotate');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }

        }, 150)

    }
}


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

// OUR SERVICES 


function pasteDescritpion(id) {

    let serviceDescription = document.getElementById('serviceDescription')
    let serviceImage = document.getElementById('serviceImage')
    let serviceDescriptions = {
        'webdev': { "text": "The Codeero Group is your go-to partner for all your Web Development needs, with a large offering of services ranging from Websites, E-Commerce, Web Applications to Content Management and Distribution Systems. Each project is carefully crafted from the ground up, starting with the selection of the right technologies and tools to final optimizations, to make our solutions cost-effective, stunningly beautiful and blazingly fast. ", "img": "img/services/webdev.png" },
        'brands': { "text": "No matter if you are just starting out or planning to rebrand your established business, The Codeero Group can help you with a full brand identity. Seasoned designers will work closely with you to craft a new logo that perfectly represents your company and vision, and further reinforce the Brand Identity with Stationary, Social Media Assets as well as a beautiful, comprehensive brand-guide to enable you to use your new brand to its fullest potential. ", "img": "img/services/branding.png" },
        'mobapp': { "text": "The Codeero Group’s expert mobile development team works closely with the client to determine the best tools to help leverage the power of mobile apps for their brand or vision. No matter if native applications for iOS and Android, Cross Platform or Progressive Web Applications, the development team ships performance-critical, highly reliable and user-friendly mobile applications. ", "img": "img/services/mobileapp.png" },
        'entapp': { "text": "Codeero Events, founded in 2015, strives to create professional, captivating and unforgettable events spanning a wide array of categories. With experience in Hackathons, Technical and Educational Workshops, Sporting Events and Corporate Celebrations, serving anyone from High Schoolers trough Senior Citizens, Codeero Events can help you make your occasion truly striking. ", "img": "img/services/enterprise.png" },
        'events': { "text": "The Codeero Group specializes in a variety of events, including educational events, technical workshops, corporate celebrations as well as small- and large-scale sporting events. Through in-house events such as Hackathons and our event series, Codeero Events strives to help educate and inspire both our youth and senior citizens. Furthermore the firm aims to help everyone embrace the technological revolution and be passionate about STEM. CE can help you put on your tech event, no matter if it is a Corporate Celebration, Workshop or Digital Event.", "img": "img/services/events.png" },
        'nonprof': { "text": "The Codeero Group, formerly known as Julo’s Development, started in 2014 as small, one-person business before growing to the company it is now. Knowing the challenges of starting and running a business, The Codeero Foundation offers heavily subsidized services (Web & Mobile Development, Branding, Design etc) to small and family run businesses and young entrepreneurs, to help get them online and establish an online presence at an affordable price. Find out more over at The Codeero Foundation.", "img": "img/services/nonprofit.png" }
    }
    serviceDescription.innerHTML = serviceDescriptions[id].text
    serviceImage.src = serviceDescriptions[id].img
}

let services = document.querySelectorAll('.service');
services.forEach(service => {
    service.addEventListener('click', function() {
        services.forEach(notClicked => {
            notClicked.classList.remove('active')
        })
        service.classList.toggle('active')
        console.log(service.id)
        pasteDescritpion(service.id)

    })
})



// OUR COMPANIES 

let companyTitle = document.getElementById('companyTitle')
let dev, found, labs, events;

let companyDescriptions = { 'Codeero Development': "Codeero Development, the original branch of The Codeero Group, specializes in web and software development. The multinational, young and vibrant team serves clients of all sizes, from young startups, through small businesses to large multinational organizations. Codeero Development is your go-to partner for all your digital needs. ", 'Codeero Foundation': "The Codeero Foundation, established in 2016 as the GAF, strives to give back to the community and support local businesses. To support up and coming students, small, family run businesses and other non-profit organizations, The Codeero Foundation provides all of The Codeero Group’s s services at a heavily discounted price, making getting online easy and affordable.   ", 'Codeero Labs': "Codeero Labs is the newest member of The Codeero Group. The Lab focuses on releasing consumer facing “Experiments”, through the form of websites, applications and other online experiences.  Those Experiments range from explorations of innovative technologies through new ways of education and art installations. ", 'Codeero Events': "Codeero Events, founded in 2015, strives to create professional, captivating and unforgettable events spanning a wide array of categories. With experience in Hackathons, Technical and Educational Workshops, Sporting Events and Corporate Celebrations, serving anyone from High Schoolers trough Senior Citizens, Codeero Events can help you make your occasion truly striking. " }
dev = document.getElementById('Codeero Development')
found = document.getElementById('Codeero Foundation')
labs = document.getElementById('Codeero Labs')
events = document.getElementById('Codeero Events')
let companyDescription = document.getElementById('companyDescription')
let cards = document.querySelectorAll('.card');
cards.forEach(card => {

    card.addEventListener('click', function() {
        dev.classList.remove('is-flipped')
        found.classList.remove('is-flipped')
        labs.classList.remove('is-flipped')
        events.classList.remove('is-flipped')
        card.classList.toggle('is-flipped');
        console.log(card.id)
        companyTitle.innerHTML = card.id;
        companyDescription.innerHTML = companyDescriptions[card.id]
    });
})



// LEARN MORE BUTTON

function toggleButton(element) {
    element.style.transform = 'translateX(62%)';
    element.style.webkitTransform = 'translateX(62%)';
    element.style.msTransform = 'translateX(62%)';
    setTimeout(function() { window.location.href = '/comingsoon' }, 1000);
}

//  ONLOAD - START EVERYTHING

window.onload = function() {

    setTimeout(() => {
        typeDestination.classList.add('ticked')
        typeOnce()
    }, 6000);


};

