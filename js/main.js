$(function () {
    //slider
    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/gallery/arrow-right.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/gallery/arrow-left.svg" alt=""></button>',
    });
    //burger-menu
    let phoneMenu = document.querySelector(".phone-menu");
    let menu = document.querySelector(".menu");
    phoneMenu.addEventListener("click", function () {
        if (phoneMenu.classList.contains("is-active")) {
            phoneMenu.classList.remove("is-active");
            menu.classList.remove("is-active");
        }
        else {
            phoneMenu.classList.add('is-active');
            menu.classList.add("is-active");
        }
    })
    //headerFixed
    let headerMenu = document.querySelector('.header__bottom');
    let headerTop = document.querySelector('.header__top');
    let headerTopHeight = headerTop.clientHeight;
    let scrollPos = window.pageYOffset;
    checkScroll(scrollPos, headerTopHeight); //если обновить в середине страницы , шапка может исчезнуть ,поэтому запускаем эту функцию сразу
    window.addEventListener("scroll", headerFixed);
    window.addEventListener("resize", headerFixed);
    function headerFixed() {
        let headerTopHeight = headerTop.clientHeight;
        let scrollPos = window.pageYOffset;
        checkScroll(scrollPos, headerTopHeight);
    }
    function checkScroll(scrollPos, headerTopHeight) {
        if (menu.classList.contains("is-active")) {
        }
        else {
            headerMenu.classList.remove("phone");
        }
        if (scrollPos > headerTopHeight) {
            headerMenu.classList.add("is-active");
        }
        else {
            headerMenu.classList.remove("is-active");
            headerMenu.classList.remove("phone");
        }
    }

})
