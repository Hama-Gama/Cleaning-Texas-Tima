// ScrollReveal
import ScrollReveal from 'scrollreveal';

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     reset: true // Animaions repeat
// })

// sr.reveal(`.locations__body {origin: 'right'})
// sr.reveal(`.testimonials-body, .contacts`, {origin: 'left'})
// sr.reveal(`.services__row`, {interval: 100})

ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
});

// ScrollReveal().reveal(`.locations, .about, .main__slide,`, {origin: 'right'})
ScrollReveal().reveal(`.service__item`,  {interval: 100})
ScrollReveal().reveal(`.location__column`,  {interval: 50})
ScrollReveal().reveal(`.testi__slider`,  {interval: 100})
ScrollReveal().reveal(`.main__slider`,  {interval: 100})
ScrollReveal().reveal(`.about__content`,  {interval: 100})