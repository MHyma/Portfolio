$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let op = document.querySelector('.menu-1');

    hamberger.addEventListener('click', function() {
        mobileNav.classList.add('open');
    });


    times.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });

    op.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });

    var typed = new Typed(".typing", {
        strings: ["Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed1 = new Typed(".typing-1", {
        strings: ["  Wanna work together !?"],
        typeSpeed: 120,
        // backSpeed: 60,
        // loop: true
    });

    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 20) {
            $('.navbar1').addClass("sticky");
        } else {
            $('.navbar1').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if (this.scrollY > 50) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu  a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.mobile-nav .menu').toggleClass("active");
        // $('.menu-btn i').toggleClass("active");
    });

///////// skills ///////

const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');
function toggleSkills(){
    let itemClass= this.parentNode.className

    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills);
})


});