/*Slider*/
var sliders = 5;
var currentSlide = 1;
/*Show and hide slider controls*/
function showSliderControls(){
	document.getElementById("next_slide").style.marginLeft="-42px";
	document.getElementById("prev_slide").style.marginLeft="10px";
	document.getElementById("slide_ind_holder").style.opacity="1";
}

function hideSliderControls(){
	document.getElementById("next_slide").style.marginLeft="0px";
	document.getElementById("prev_slide").style.marginLeft="-32px";
	document.getElementById("slide_ind_holder").style.opacity="0";
}
/*Change image*/
function gotoImage (n) {
	if (n < 1) {n = sliders};
	if (n > sliders) {n = 1};
	console.log(n)
	var a = "slide_ind_" + currentSlide.toString();
	var b = "slide_ind_" + n.toString();
	document.getElementById(a).style.backgroundColor="#0087BD";/*"Uncheck" current slide*/
	document.getElementById(b).style.backgroundColor="#DF0024";/*"Check" new slide*/
	currentSlide = n
	var c = -100*(currentSlide-1);
	c = c + "%";
	console.log(c)
	document.getElementById("slide_img_holder").style.marginLeft=c;
}