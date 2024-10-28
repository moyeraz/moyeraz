document.addEventListener( 'DOMContentLoaded', function (){


    // add class on scroll
    window.addEventListener('scroll', function (){
        var scrollPosition = window.scrollY;
        var body = document.querySelector('body');

        if ( scrollPosition > 10 ) {
            body.classList.add('header-fixed');
        } else {
            body.classList.remove('header-fixed');
        }
    });

    // swiper: featured articles
    const swiperEl = document.querySelector('.swiper');

    if (swiperEl) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 1000,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        });
    }


});
