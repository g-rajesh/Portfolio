/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav_menu'),
    navClose = document.getElementById('nav_close'),
    navToggle = document.getElementById('nav_toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
})


/*==================== REMOVE MENU MOBILE ====================*/

const navLinks = document.querySelectorAll('.nav_link');

const removeShowMenu = () => {
    navMenu.classList.remove('active');
}

navLinks.forEach(link => link.addEventListener('click', removeShowMenu));


/*==================== ACCORDION SKILLS ====================*/
skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
    let itemClass = this.parentNode.className

    if(itemClass.includes("skills_close")) {
        this.parentNode.className = "skills_content skills_open";
    } else {
        this.parentNode.className = "skills_content skills_close";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const educationBtn = document.querySelector('.qb1'),
experienceBtn = document.querySelector('.qb2');

const educationContent = document.querySelector('.qualification_content#education'),
experienceContent = document.querySelector('.qualification_content#experience');

educationBtn.addEventListener('click', () => {
    educationBtn.classList.add('active');
    experienceBtn.classList.remove('active');
    educationContent.classList.add('qualification_active');
    experienceContent.classList.remove('qualification_active');
});

experienceBtn.addEventListener('click', () => {
    experienceBtn.classList.add('active');
    educationBtn.classList.remove('active');
    experienceContent.classList.add('qualification_active');
    educationContent.classList.remove('qualification_active');
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-100;
        let sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeeader() {
    const nav = document.getElementById('header');

    if(this.scrollY >= 80) {
        nav.classList.add('scroll_header');
    } else {
        nav.classList.remove('scroll_header');
    }
}

window.addEventListener('scroll', scrollHeeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollTop() {
    const scrollTop = document.getElementById('scroll_up');

    if(this.scrollY >= 560) {
        scrollTop.classList.add('show_scroll_top');
    } else {
        scrollTop.classList.remove('show_scroll_top');
    }
}

window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/ 
const themeBtn = document.querySelector('.theme_icon');
const darkTheme = "dark_theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selectedIcon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    localStorage.setItem('selectedTheme', getCurrentTheme());
    localStorage.setItem('selectedIcon', getCurrentIcon());

})

// TYPED JS

var typed = new Typed('.home_subtitle_typed', {
    strings: ['Programmar', 'Full Stack Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// SCROLLREVEAL JS
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: '2000'
});

// SCROLL HOME
sr.reveal('.blob', {})
sr.reveal('.home_title', {delay: 500})
sr.reveal('.home_data', {delay: 600})
sr.reveal('.home_social', {delay: 700})
sr.reveal('.home_info', {interval:100, delay: 700})
sr.reveal('.home_buttons', {delay: 800})
sr.reveal('.home_scroll', {delay: 900})

// SCROLL SKILLS
sr.reveal('.skills_content', {delay: 300, interval: 200})


// // SCROLL QUALIFICATION
sr.reveal('.qualification_1_l', {origin: 'left', delay: 300, interval: 200})
sr.reveal('.qualification_1_r', {origin: 'right', delay: 400, interval: 200})


// submitHandler 
function sendEmail(e) {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    
    const nameError = document.querySelector('#name_error');
    const emailError = document.querySelector('#email_error');
    const subjectError = document.querySelector('#subject_error');
    const messageError = document.querySelector('#message_error');

    const success = document.querySelector('#message_success');

    nameError.classList.remove('show_error');
    emailError.classList.remove('show_error');
    subjectError.classList.remove('show_error');
    messageError.classList.remove('show_error');

    success.classList.remove('show_success');
    
    if(name === '' || email === '' || subject === '' || message === '') {
        if(name === '') {
            nameError.classList.add('show_error');
            nameError.innerText = "Name is required";
        }
        if(email === '') {
            emailError.classList.add('show_error');
            emailError.innerText = "Email is required";
        }
        if(subject === '') {
            subjectError.classList.add('show_error');
            subjectError.innerText = "Subject is required";
        }
        if(message === '') {
            messageError.classList.add('show_error');
            messageError.innerText = "Message is required";
        }
    } 
    else if(!email.includes('@gmail.com')) {
        emailError.classList.add('show_error');
        emailError.innerText = "Invalid email";
    }
    else {
        const params = {
            from_name: name,
            from_gmail: email,
            subject,
            message
        };

        emailjs.send('my_portfolio', 'myPortfolioTemplate', params)
        .then((res) => {
            success.classList.add('show_success');
            success.innerText = "Mail sent successfully";

            setTimeout(() => success.classList.remove('show_success') , 3000);

            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#subject').value = '';
            document.querySelector('#message').value = '';
        }).catch(err => {
            success.classList.add('show_error');
            success.innerText = "Error occured. Try again later";
            setTimeout(() => success.classList.remove('show_error') , 3000);
        })
    }
}
document.querySelector('.contact_form').addEventListener('submit', sendEmail);