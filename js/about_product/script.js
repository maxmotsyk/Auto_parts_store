$(document).ready(function () {

  // закрытие окно загрузки страницы (preloader)
  $('.preloader').fadeOut(1500);

  // кнопка бургер меню
  $('.burger_button').click(function(){
    $(this).toggleClass('active');
    $('body').toggleClass('lock');
    $('#information_col').toggleClass('hiden');
    $('#burger_menu').toggleClass('active').css("display", "flex").hide().toggle( "drop",300);
  });

  // смена положения карточек поиска по бренду и артиклу
  $('.rotate_serchcards_button').click(function(){
    $('.card_serch_by').toggleClass('active');
  });

  // выход с бургер меню
  $('.img_exit').click(function(e){
      $('#burger_menu').toggleClass('active').toggle( "drop",300);
      $('#information_col').toggleClass('hiden');
      $('.burger_button').toggleClass('active');
      $('body').toggleClass('lock');
      $('.menu_hiden').css("display", "none");
      e.stopPropagation();
  });

  // открытие под меню в бургер меню
  $('.undermenu_mobile_v').click(function(e){
      $(this).children('.menu_hiden').toggle( "drop",300);
      e.stopPropagation();
  });
  
  // назад в бургер меню
  $('.back').click(function(e){
      $(this).parent().parent().toggle( "drop",300);
      e.stopPropagation();
  });

  // фикс бага при нажатие на живой поиск в бургер меню
  $('.live_search').click(function(e){
      e.stopPropagation();
  });

  // логика живого поиска
  $('.live_search').keyup(function(e){
      
      let live_word = $(this).val().trim().toLowerCase();
      let mass_li_item = $(this).next().children('li');

      if(live_word !== ''){
        mass_li_item.each(function(){
          if($(this).children('a').text().toLowerCase().search(live_word) == -1){
            $(this).fadeOut(300);
          }
          else{
            $(this).fadeIn(300);
          }

        })
      }
      else{
        mass_li_item.each(function(){
          $(this).fadeIn(300);
        })
      }
  
  });

  // открытие каталога на Декстоп верси
  $('.open_catalog').click(function(){
    $('#modal_window_catalog_body').css("display", "flex").fadeIn(300);
    $('body').toggleClass('lock');
  });

  // закрытие каталога на Декстоп верси
  $('#modal_window_catalog_body').click(function(){
    $(this).fadeOut(300);
    $('body').toggleClass('lock');
  });

  // переменая сохраняет последние открытие позиции в каталоге Декстоп верси
  let temp_last_li_item;

  // открытие позиции в каталоге Декстоп верси
  $('.item').click(function(e){
    if(temp_last_li_item != null){
      $(temp_last_li_item).next('.menu_hiden').fadeOut(0);
      $(temp_last_li_item).children('img').toggleClass('active');
    }

    $(this).children('img').toggleClass('active');
    $(this).next('.menu_hiden').fadeIn(300);
    temp_last_li_item = $(this);
    e.stopPropagation();
  });


    $('.burger_menu_item').click(function(){
      $('.burger_button').toggleClass('active');
      $('body').toggleClass('lock');
      $('#information_col').toggleClass('hiden');
      $('#burger_menu').toggleClass('active').toggle( "drop",300);
    });

    // раскрытие номеров телефона в  #additional_information
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

    // открытие #additional_information на моб верcи
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
  
    // открытие undermenu в navbar
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

     // переменая с .rating_star
     const ratings = $('.rating_star');

     // проверка на наличие рейтинга на странице и иницилизация
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

           if($(rating).hasClass('rating_set')){
             setRating(rating);
           }

         }

         function initRatingVars(rating){
           rating_active = $(rating).find('.rating_active');
           rating_value = $(rating).children('.rating_value');
         }

         function setRatingActiveWidth(index = $(rating_value).text().trim()){
           let rating_active_width = index / 0.05;
           $(rating_active).css("width",`${rating_active_width}%`);
         }

           function setRating(rating){
             let radio = $(rating).find('.rating_item');
             
             for(let i = 0; i < radio.length; i++){
                 const rating_radio = radio[i];
                 rating_radio.addEventListener('mouseenter',function(e) {
                     initRatingVars(rating);
                     setRatingActiveWidth(rating_radio.value);
                 });
     
                 rating_radio.addEventListener('mouseleave',function (e){
                     setRatingActiveWidth();
                 });
     
                 rating_radio.addEventListener('click',function (e){
                     initRatingVars(rating);
     
                     if(rating.dataset.ajax){
                         // setRa
                     }
                     else{
                       $(rating_value).text(i + 1);
                       setRatingActiveWidth();
                     }

                 });
             }
         }

     }
	
	    // раскрывающийся список в footer
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

      // фото слайдер главное фото 
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });

      // мин фото слайдер 
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

      // слайдер с альтернативными товарами
      $('.alternative_product_slider').slick({
        infinite: true,
        slidesToShow:4,
        slidesToScroll: 1,
        centerPadding: '0px',
        variableWidth:true,
        prevArrow: "<img src='../img/about_product/section/prew-next-arrow.svg'  class='prev' alt='1'>",
        nextArrow: "<img src='../img/about_product/section/prew-next-arrow.svg'  class='next' alt='2'>",
        dots: false,
        arrows: true,
        

        responsive: [
            {
              breakpoint:988,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint:580,
                settings: {
                  variableWidth:false,
                  slidesToShow: 2,
                  arrows: false,
                }
            },
            {
              breakpoint:441,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
            },
          
        ]

      });
      
      // меню(коментари,описания товара,характеристики,о произвадителе)
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

      // создать отзыв
      $('#send_reviewsLink').click(function(){
        $('.send_reviews').css("display", "flex").hide().fadeIn();
        $('body').toggleClass('lock')
      });

      //закрыть отзыв
      $('#send_reviews_exit_img').click(function(){
        $('.send_reviews').fadeOut();
        $('body').toggleClass('lock')
      });

});