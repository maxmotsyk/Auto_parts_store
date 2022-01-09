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

    $('.live_search').keyup(function(){

      let live_word = $(this).val().trim().toLowerCase();
      let mass_li_item = $(this).next().children('li');

      if(live_word !== ''){
        mass_li_item.each(function(){
          if($(this).children('p').text().toLowerCase().search(live_word) == -1){
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

    })

    $('.drop_menu_item').click(function(){

      let input_body = $('.input_body');
      let item1 = $(this).children('p').text().trim(' ');
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

});