
var sharpSlideShow = {};

function slideShowClass(slideShowID,slideIndex){
	this.ID = slideShowID;
	this.slideIndex = slideIndex?slideIndex:1;
	this.showSlides();
}
slideShowClass.prototype = {
	plusSlides: function(n) {
		this.showSlides(this.slideIndex += n);
	},

	currentSlide: function(n) {
		this.showSlides(this.slideIndex = n);
	},

	showSlides: function(n) {
		var i;
		var slides = document.getElementsByClassName("sss-slide sss-slide-"+this.ID);
		var dots = document.getElementsByClassName("sss-dot sss-dot-"+this.ID);
		if (n > slides.length) {this.slideIndex = 1} 
		if (n < 1) {this.slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
	  	}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[this.slideIndex-1].style.display = "block"; 
		dots[this.slideIndex-1].className += " active";
	},
}

function intialice_sharpSlideShow(slideShowID){
	'use strict';
	sharpSlideShow[slideShowID] = new slideShowClass(slideShowID);
}
