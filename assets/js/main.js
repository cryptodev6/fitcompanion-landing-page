"use strict";

/* ==== Vanilla JS Back To Top Widget ====== */
/* Ref: https://github.com/vfeskov/vanilla-back-to-top */
addBackToTop({
  cornerOffset: 15, // px
  id:'back-to-top',
});


/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


const scrollLinks = document.querySelectorAll('.scrollto');
const mobileMenu = document.querySelector('#navbar-collapse');



scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 67;  //sticky header height
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (mobileMenu.classList.contains('show')){
			mobileMenu.classList.remove('show');
		}

		
    });
	
});


/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Get the sticky header
var header = document.querySelector('#header');


// Initialize Gumshoe
var spy = new Gumshoe('#navbar-nav a', {
	offset: function () {
		return header.getBoundingClientRect().height;
	}
});