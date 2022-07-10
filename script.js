$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrolly > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");

        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrolltop: 0});
    });
/*xx pras letras aparecerem uma a uma (1) */
    var typed = new Typed(".typing", {          
        strings:["Desenvolvedor", "Designer", "Programador", "Freelancer"], 
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    var typed = new Typed(".typing-2", {          
        strings:["Desenvolvedor", "Designer", "Programador", "Freelancer"], 
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    $('menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            }
        }
    })



















});