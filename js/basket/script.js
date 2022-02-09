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

    // выпадания списка с доставки ,оплаты,адрес..
    $('.button_for_ul_drop_menu').click(function(){
      let drop_menu_mass = $('.button_for_ul_drop_menu');
      
      if($(this).children('img').hasClass('active')){
        $(this).next().slideUp(300);
        $(this).children('img').toggleClass('active');
      }
      else{
        $(this).next().slideDown(300);
        $(this).children('img').toggleClass('active');
      }

      for( let i = 0; i < drop_menu_mass.length; i++){

        if(drop_menu_mass[i] !== this){
          
          if($(drop_menu_mass[i].childNodes[3]).hasClass('active')){

            $(drop_menu_mass[i]).children('img').toggleClass('active');
            $(drop_menu_mass[i]).next().slideUp(300);

          }
    
        }

      }

    });

    // при нажатие на вариант доставки ,оплаты,адрес..
    $('.drop_menu_item').click(function(){

      let input_body = $('.input_body');
      let item1 = $(this).children('a').text().trim(' ');
      $(this).parent().parent().slideUp(300);
      $(this).parent().parent().prev().children('span').text(item1);
      $(this).parent().parent().prev().children('img').toggleClass('active');

      if($(this).hasClass('delivery_item')){

        if(item1 == 'Новая Почта'){
         
          for(let i = 0; i < input_body.length;i++){

            if($(input_body[i]).hasClass('post')){

              $(input_body[i]).fadeIn(300);

            }
            else{
              $(input_body[i]).fadeOut(300);
            }

          }

        }
        else if(item1 == 'Доставка' || item1 == 'Такси (по Киеву)'){

          for(let i = 0; i < input_body.length;i++){

            if($(input_body[i]).hasClass('deliver_taxi')){

              $(input_body[i]).fadeIn(300);
  
            }
            else{
              $(input_body[i]).fadeOut(300);
            }

          }

        }
        else if(item1 == 'Самовывоз'){
          
          for(let i = 0; i < input_body.length;i++){

            $(input_body[i]).fadeOut(300);
          }

        }

      }

    });

});