$(document).ready(function() {
	    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 2000,
        nav: true,
        margin: 120,
        dots: false,
       // autoplay: true,
        autoplayTimeout: 8000,
        center: true,
        autoWidth: true,
    });
    $('.owl-nav .owl-prev span').html('<img src="img/left.svg"/>');
    $('.owl-nav .owl-next span').html('<img src="img/right.svg"/>');
    $(window).on("scroll", function() {
        animateElement('.title.animate', 'animate__zoomIn', 780);
        animateElement('.work .content', 'animate__rotateInUpLeft', 520);
        animateElement('.achievement', 'animate__rotateInUpRight', 520);
        animateElement('.about .description div img', 'animate__fadeInLeft', 520);
        animateElement('.about .description .text', 'animate__fadeInRight', 520);
        animateElement('.contact .form-input .left-form', 'animate__fadeInBottomLeft', 620);
        animateElement('.contact .form-input .right-form', 'animate__fadeInBottomRight', 620);
    });
    $('.right-form div > :checkbox').on('change', function() {
      var checkbox = $(this);
      var name = checkbox.prop('name');
      if (checkbox.is(':checked')) {
        $(':checkbox[name="' + name + '"]').not($(this)).prop({
          'checked': false,
          'required': false
        });
      }
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 2000);
        return false;
    });
});

function animateElement(nameElement, nameAnimate, height) {
    $(nameElement).each( function() {
        var heightElement = $(this).offset().top;
        if ($(window).scrollTop() > heightElement - height) {
            $(this).css({
                opacity: 1
            });
            $(this).addClass('animate__animated');
            $(this).addClass(nameAnimate);
        }
    });
}