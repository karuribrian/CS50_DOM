document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('button').forEach(function(button){
    button.onclick = function(){
		document.querySelector("body").style.background = button.dataset.color;
	}
	});
        
});
