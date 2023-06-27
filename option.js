document.addEventListener("DOMContentLoaded", function(){
 document.querySelector("select").onchange = function(){
	document.querySelector("body").style.background = this.value;
 }
});
