/*
window.onload = function(){
    // Slider Height
    $('.owl-carousel .item').height($(window).height())
    //Owl- Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1
    }) 
}
*/









$(document).ready(function(){
   
    //Owl- Carousel
    $('.header .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        animateOut:'fadeOut',
        smartSpeed:450
    });

    // Side Menu
    $('.menu').on('click',function(){
        $('.side-menu').toggleClass('open')
    })
    $('.fa-times').on('click',function(){
        $('.side-menu').removeClass('open')
    })
    // toggle navs
    $(window).scroll(function(){
        if($(this).scrollTop()>=30){
            $('.nav-left').fadeOut(500)
            $('.nav-top').fadeIn(500)
        }else{
            $('.nav-top').fadeOut(500)
            $('.nav-left').fadeIn(500)  
        }
    })

    // Counter Up
    const counters = document.querySelectorAll('.about .num');
    const delay = 200;

    counters.forEach(counter=>{
        const updateCount = ()=>{
            const target = counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target/delay;
            if(count < target){
                counter.innerText = Math.floor(count + speed);
                setTimeout(updateCount,1);
    
            }else{
                counter.innerText = target
            }  
        }
        updateCount()
    });

    //Count Down 
    var content = $('.countdown').html();
    $('.countdown').countdown('2022/01/01', function(event) {
       
        $(this).html(event.strftime(content));
    });

    // owl crousel brands
    $('.brands .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        responsive:{0: {items:2},768:{items:4},992:{items:6}}
    });

    // Switch Between Links
   /*
    var link = $('link[data-color="switch"]'),
    logo = $('.logo img')
    $('.fa-adjust').on('click',function(){
        if(link.attr('href')=='css/style-dark.css'){
            link.attr('href','css/style-light.css')
            logo.attr('src','images/logo-dark.png')
            
        }else{
            link.attr('href','css/style-dark.css')
            logo.attr('src','images/logo.png')
        }
    })
    */

    var link = document.querySelector('link[data-color="switch"]'),
        logo = document.querySelector('.logo img');
    document.querySelector('.fa-adjust').onclick = function(){
        if(link.getAttribute('href')=='css/style-dark.css'){
            link.setAttribute('href','css/style-light.css');
            logo.setAttribute('src','images/logo-dark.png');
        }else{
            link.setAttribute('href','css/style-dark.css');
            logo.setAttribute('src','images/logo.png');
        }
    }
})
