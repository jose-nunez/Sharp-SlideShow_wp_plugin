
var sharpSlideShow = {};

function slideShowClass(slideShowID,slideIndex){
	this.ID = slideShowID;
	this.slideIndex = slideIndex||1;
	this.showSlides();
}
slideShowClass.prototype = {
	hasSlides: function(){
		return document.getElementsByClassName("sss-slide").length>0;
	},
	plusSlides: function(n) {
		this.showSlides(this.slideIndex += n);
	},

	currentSlide: function(n) {
		this.showSlides(this.slideIndex = n);
	},

	showSlides: function(n) {

		if(!this.hasSlides()) return this.showNoSlides();

		document.getElementsByClassName("sss-container")[0].style.display = "block";
		document.getElementsByClassName("sss-dots-container")[0].style.display = "block";
		document.getElementsByClassName("sss-no-slides")[0].style.display = 'none';

		var slides = document.getElementsByClassName("sss-slide sss-slide-"+this.ID);
		var dots = document.getElementsByClassName("sss-dot sss-dot-"+this.ID);
		var i;
		if (n > slides.length) {this.slideIndex = 1} 
		if (n < 1) {this.slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
	  	}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[this.slideIndex-1].style.display = "block"; 
		if(dots[this.slideIndex-1]) dots[this.slideIndex-1].className += " active";
	},
	showNoSlides: function(){
		document.getElementsByClassName("sss-container")[0].style.display = "none";
		document.getElementsByClassName("sss-dots-container")[0].style.display = "none";
		document.getElementsByClassName("sss-no-slides")[0].style.display = 'block';
	},
}

function intialice_sharpSlideShow(slideShowID,slideIndex){
	'use strict';
	sharpSlideShow[slideShowID] = new slideShowClass(slideShowID,slideIndex);
}
