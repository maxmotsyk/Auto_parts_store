$(document).ready(function () {

    $('.burger_button').click(function(){
      $(this).toggleClass('active');
      $('body').toggleClass('lock');
      $('#information_col').toggleClass('hiden');

      if( $('#burger_menu').hasClass('active')){
        $('#burger_menu').toggleClass('active').fadeOut(300);
      }
      else{
        $('#burger_menu').toggleClass('active').fadeIn(300);
      }
    });


    $('.phone_menu').click(function(){
      $(this).parent().toggleClass('unactive');
      $(this.childNodes[1]).toggleClass('active');
      $(this.childNodes[5]).toggleClass('active');
      
      if($(this.childNodes[3]).hasClass('active')){

        $(this.childNodes[3]).width('0%');

        $(this.childNodes[3]).toggleClass('active');
          
      } 
      else{
        $(this.childNodes[3]).toggleClass('active');
      
        $(this.childNodes[3]).animate({
          width:"100%" 
        },1000);
      }
      
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      
      $('.slider-nav').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        asNavFor: '.slider-for',
        prevArrow: "<img src='../img/about_product/section/prew-next-arrow.svg'  class='prev' alt='1'>",
        nextArrow: "<img src='../img/about_product/section/prew-next-arrow.svg'  class='next' alt='2'>",
        dots: false,
        arrows: true,
        focusOnSelect: true,

        responsive: [
            {
              breakpoint:988,
              settings: {
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
                breakpoint:744,
                settings: {
                  slidesToShow: 3,
                  centerPadding: '0',
                }
            },
            {
                breakpoint:580,
                settings: {
                    arrows: false,
                }
            },
  
          
        ]

      });

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

      
      for( let i = 0; i < under_menus.length; i++){

        if(under_menus[i] !== this){
          
          if($(under_menus[i].childNodes[3]).hasClass('active')){

            $(under_menus[i].childNodes[3]).toggleClass('active').slideUp(300);
            $(under_menus[i].childNodes[1].childNodes[1]).toggleClass('active');
          }

        }

      }

    });


      $('.footer_menu_category').click(function(){

        if ($(window).width() <= 575) {
          let ul_menu = $(this).next();

          if($(ul_menu).hasClass('active')){
            $(ul_menu).toggleClass('active').slideUp(300);
            $(this.childNodes[1]).toggleClass('active')
          }
          else{
            $(ul_menu).toggleClass('active').slideDown(300);
            $(this.childNodes[1]).toggleClass('active')
          }
        }
      });


      $('.nav_menu_item').click(function(){

        let menu_elements = $('.nav_menu_item');
  
        $(this.childNodes).css({
          'color':'#F5C331',
        })
  
        for( let i = 0; i < menu_elements.length; i++){
  
          if(menu_elements[i] !== this){
            
            $(menu_elements[i].childNodes).css({
              'color':'#333333',
            })
  
          }
  
        }
  
        if($(this).hasClass('fabricator')){
          $('.fabricator_body').slideDown(300);
          $('.reviews_body').slideUp(300);
          $('.specification_body').slideUp(300);
          $('.description_body').slideUp(300);
        }
        else if($(this).hasClass('reviews')){
          $('.reviews_body').slideDown(300);
          $('.fabricator_body').slideUp(300);
          $('.specification_body').slideUp(300);
          $('.description_body').slideUp(300);
        }
        else if($(this).hasClass('specification')){
          $('.specification_body').slideDown(300);
          $('.reviews_body').slideUp(300);
          $('.fabricator_body').slideUp(300);
          $('.description_body').slideUp(300);
        }
        else if ($(this).hasClass('description')){
          $('.description_body').slideDown(300);
          $('.reviews_body').slideUp(300);
          $('.fabricator_body').slideUp(300);
          $('.specification_body').slideUp(300);
          
          
        }
        else{
          console.log('not have this menu element');
        }
  
      });

      $('#send_reviewsLink').click(function(){
        $('.send_reviews').css("display", "flex").hide().fadeIn();
        $('body').toggleClass('lock')
      });

      $('#send_reviews_exit_img').click(function(){
        $('.send_reviews').fadeOut();
        $('body').toggleClass('lock')
      });

      const ratings = $('.rating_star');

      if(ratings.length > 0){
        initRatings();
      }

      // фунция иницелизации рейтингов
      function initRatings(){
        let rating_active,rating_value;

        // заполнения всех рейтингов
        for(let i = 0; i < ratings.length; i++){
          const rating = ratings[i];
          initRating(rating);
        }

        // заполнения определеного рейтинга
        function initRating(rating){
          initRatingVars(rating);
          setRatingActiveWidth();
        }

        function initRatingVars(rating){
          rating_active = $(rating).find('.rating_active');
          rating_value = $(rating).children('.rating_value');

        }

        function setRatingActiveWidth(){
          let index = $(rating_value).text().trim()
          let rating_active_width = index / 0.05;
          $(rating_active).css("width",`${rating_active_width}%`);
        }

      }

});