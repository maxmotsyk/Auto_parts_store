$(document).ready(function () {

    $(".tail").click(function(){
      
        if($(this).hasClass('active')){
          $(this).toggleClass('active');
          $('.information').slideUp(300);
        }
        else{
          $(this).toggleClass('active');
          $('.information').slideDown(300);
        }

    });
  
    $(".undermenu").click(function(){
      $(this.childNodes[1].childNodes[1]).toggleClass('active');
    
      let this_element = this.childNodes[3];
      let under_menus = $('.undermenu');

      if($(this_element).hasClass('active')){
        $(this_element).toggleClass('active').slideUp(300);
      }
      else{
        $(this_element).toggleClass('active').slideDown(300);
      }

      console.log(under_menus.length);
      for( let i = 0; i < under_menus.length; i++){

        if(under_menus[i] !== this){
          
          if($(under_menus[i].childNodes[3]).hasClass('active')){

            $(under_menus[i].childNodes[3]).toggleClass('active').slideUp(300);
            $(under_menus[i].childNodes[1].childNodes[1]).toggleClass('active');
          }

        }

      }

    });

   
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        arrows : false,
        asNavFor: '.slider-nav'
    });

      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: "<img src='../img/main/section/prevArrow.svg'  class='prev' alt='1'>",
        nextArrow: "<img src='../img/main/section/nextArrow.svg'  class='next' alt='2'>",
        responsive: [
          {
            breakpoint:1111,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },

          {
            breakpoint: 982,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },

        ]
      });

      $('.slider_oil').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<img src='../img/main/section/prevArrow.svg'  class='prev' alt='1'>",
        nextArrow: "<img src='../img/main/section/nextArrow.svg'  class='next' alt='2'>",
        responsive: [
          {
            breakpoint: 982,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }
        ]
      });

});

