/*!
    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

//Mengubah judul dokumen
const judul = document.getElementsByTagName('title')[0];
judul.innerHTML = 'PT HERALDI BAWANA INMARK';

//Mengubah Isi Halaman Utama
const namaPerusahaan = document.getElementsByClassName("navbar-brand js-scroll-trigger")[0];
const profil = document.getElementsByClassName("nav-link js-scroll-trigger")[0];
const produk = document.getElementsByClassName("nav-link js-scroll-trigger")[1];
const kontak = document.getElementsByClassName("nav-link js-scroll-trigger")[2];
const teksBackground1 = document.getElementsByClassName("mx-auto my-0 text-uppercase")[0];
const teksBackground2 = document.getElementsByClassName("text-white-50 mx-auto mt-2 mb-5")[0];
const tombol = document.getElementsByClassName("btn btn-primary js-scroll-trigger")[0];

namaPerusahaan.innerHTML = 'PT HERALDI BAWANA INMARK';
namaPerusahaan.style.color = ' #e6e6e6' ;
profil.innerHTML = 'Profil';
profil.style.color = '#e6e6e6';
produk.innerHTML = 'Produk'
produk.style.color = '#e6e6e6';
kontak.innerHTML = 'Kontak';
kontak.style.color = '#e6e6e6'
teksBackground1.innerHTML = "L'agie ";
teksBackground2.innerHTML = 'Chocolate for Every Moment';
tombol.innerHTML = ' ';
tombol.removeAttribute('href');
tombol.removeAttribute('class');

//Menambah navigasi
const ul = document.getElementsByTagName('ul')[0];
const liBaru = document.createElement('li');
const teksNode = document.createTextNode('Belanja')
const ancBaru = document.createElement('a');

liBaru.setAttribute('class','nav-item');
liBaru.appendChild(teksNode);
ul.appendChild(liBaru);
ancBaru.setAttribute('class','nav-link js-scroll-trigger');