// Offer slider
const offerSlider = new Swiper('.offer-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.offer-button-next',
        prevEl: '.offer-button-prev',
    },
    pagination: {
        el: '.offer-pagination',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

// Team slider
const teamSlider = new Swiper('.team-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: '.team-button-next',
        prevEl: '.team-button-prev',
    },
    pagination: {
        el: '.team-pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            autoHeight: false
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

// Review slider
const reviewSlider = new Swiper('.review-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.review-button-next',
        prevEl: '.review-button-prev',
    },
    pagination: {
        el: '.review-pagination',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

// Gallery slider
const galSlider = new Swiper(".gal-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
        rows: 2,
    },
    navigation: {
        nextEl: '.gal-button-next',
        prevEl: '.gal-button-prev',
    },
    pagination: {
        el: '.gal-pagination',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    }
});

// Certificate slider
const certifSlider = new Swiper('.certif-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.certif-button-next',
        prevEl: '.certif-button-prev',
    },
    pagination: {
        el: '.certif-pagination',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    }
});

// MaskedInput
$(".form-tel").mask("9 (999) 9999999");

// Fixed header
$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $('.header-fixed').addClass('show');
    } else {
        $('.header-fixed').removeClass('show');
    }
});

// Menu
$('.burger').click(function() {
    $('.burger').toggleClass('active');
    $('#menu').toggleClass('active');
});
$('.nav a').click(function(event) {
    $('.burger').removeClass('active');
    $('#menu').removeClass('active');
});

//Scroll to top
function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    let call = document.querySelector('.call');
    let whatsapp = document.querySelector('.whatsapp');
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 599px, показываем кнопку
        if (pageYOffset > 500) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 599px, показываем кнопку
        if (pageYOffset > 100) {
            call.classList.add('show');
            // Иначе прячем
        } else {
            call.classList.remove('show');
        }
    });
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 599px, показываем кнопку
        if (pageYOffset > 100) {
            whatsapp.classList.add('show');
            // Иначе прячем
        } else {
            whatsapp.classList.remove('show');
        }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});

// Magnific pop up
$('.offer-pop-up').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

$('.review-pop-up').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

$('.gal-pop-up').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

$('.certif-pop-up').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

// Click watch
$(document).ready(function() { 
    $("a[href^='tel:']").attr("onclick", "fbq('track', 'Lead'); gtag('event', 'send', {'event_category': 'phone','event_action': 'click'}); ym(88899395,'reachGoal','phone-click'); return true;"); 

    $("a[href^='https://wa.me/77006831548']").attr("onclick", "fbq('track', 'Lead'); gtag('event', 'send', {'event_category': 'whatsapp','event_action': 'click'}); ym(88899395,'reachGoal','whatsapp-click'); return true;"); 

    $("form").attr("onsubmit", "fbq('track', 'Lead'); gtag('event', 'send', {'event_category': 'form','event_action': 'send'}); ym(88899395, 'reachGoal', 'form-send'); return true;"); 
}); 