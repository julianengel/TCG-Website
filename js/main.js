// Cards

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

// Typing 


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

window.onload = function() {

    setTimeout(() => {
        typeDestination.classList.add('ticked')
        typeOnce()
    }, 8000);


};


// Learn More Button

function toggleButton(element) {
    element.style.transform = 'translateX(62%)';
    element.style.webkitTransform = 'translateX(62%)';
    element.style.msTransform = 'translateX(62%)';
    setTimeout(function() { window.location.href = '/comingsoon' }, 1000);
}