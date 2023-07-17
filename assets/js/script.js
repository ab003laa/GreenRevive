$(document).ready(()=>{
    
    $(".navbar-toggler").click(()=>{
        $(".navbar-collapse").animate({"right":"0%"}, 500);
    })
    $(".navbar-nav .nav-item .nav-link").click(function(){
        $(this).next().toggleClass("active").parent().siblings().find(".drop-down-menu.active").removeClass("active");
    })
    $(window).scroll(function(){
         // navbar
        $(".navbar").toggleClass("scrolled" ,$(this).scrollTop() > 50);
        // btn-scroll-to-up
        $(".btn-scroll-to-up").toggleClass("active" ,$(this).scrollTop() > 50);
      });

    // service .nav-item
    $(".service .nav-item").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    ;
    
    $('.project .owl-carousel').owlCarousel({
        
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
               
            }
        }
    });
    $('.team .owl-carousel').owlCarousel({
        
        loop:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
               
            }
        }
    });
    $('.tastimonials .owl-carousel').owlCarousel({
        
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        smartSpeed:500,
        autoplayTimeout:8000,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });

    $('.blog .owl-carousel').owlCarousel({
        
        loop:false,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        smartSpeed:500,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
    $('.brand .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
    $(".btn-scroll-to-up").click(function(){
        $("html").animate({scrollTop:0},1000)
    });
    $(".lodaingPage").fadeOut(3000);
    
})

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
  
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var targetPosition = document.querySelector(targetId).offsetTop;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 800;
      var start = null;
  
      window.requestAnimationFrame(step);
  
      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
  
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
    }
  });
  

  $(document).ready(function() {
    // Initialize the Owl Carousel
    var owl = $('.tastimonials .owl-carousel');
  
    // Listen for form submission
    $('.request form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get the values from the input fields
      var name = $('#name').val();
      var message = $('#message').val();
  
      // Create a new testimonials item with the values
      var testimonialsItem = $('<div class="tastimonials-item"><div class="tastimonials-img"><img src="assets/img/icon-1.png" alt="" srcset=""></div><p>' + message + '</p><div class="tastimonials-content"><h4>' + name + '</h4><span>Customer</span></div></div>');
  
      // Add the new testimonials item to the Owl Carousel
      owl.trigger('add.owl.carousel', [testimonialsItem]).trigger('refresh.owl.carousel');
  
      // Reset the form fields
      $('#name').val('');
      $('#message').val('');
    });
  });
  
  
  
  
  
  
  
  
  
