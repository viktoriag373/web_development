var btn = document.getElementById("btn");
btn.onclick = function () {
    var text = document.querySelector(".aspiration");
    text.classList.add("color")
}

	

$(function () {
	function animate (obj, anim) {
		var imagePos = $(obj).offset().top;

	    var topOfWindow = $(window).scrollTop();
	    if (imagePos < topOfWindow+650) {
	        $(obj).addClass(anim);
	    }
	}

	$(window).scroll(function() {
	    $('.my_future_h_anim').each(function(){
			animate(this, "fadeInDownBig");
	    });

	    $('.my_future_skills_anim').each(function(){
			animate(this, "fadeInUpBig");
	    });

	    $('.form_request_h_anim').each(function(){
			animate(this, "zoomIn");
	    });
	
	    $('.form_request_form_anim').each(function(){
			animate(this, "zoomInUp");
	    });
	});
})