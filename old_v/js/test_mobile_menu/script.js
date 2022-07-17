$(document).ready(function () {

    $('.burger_button').click(function(){
      $(this).toggleClass('active');
      $('body').toggleClass('lock');
      $('#information_col').toggleClass('hiden');
      $('#burger_menu').toggleClass('active').css("display", "flex").hide().toggle( "drop",300);
    
    });

    $('.open_catalog').click(function(){
      $('#modal_window_catalog_body').css("display", "flex").fadeIn(300);
      $('body').toggleClass('lock');
    });

    $('#modal_window_catalog_body').click(function(){
      $(this).fadeOut(300);
      $('body').toggleClass('lock');
    });

    let temp_last_li_item;

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

    $('.rotate_serchcards_button').click(function(){
      $('.card_serch_by').toggleClass('active');
    });

    $('.img_exit').click(function(e){
        $('#burger_menu').toggleClass('active').toggle( "drop",300);
        $('#information_col').toggleClass('hiden');
        $('.burger_button').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu_hiden').css("display", "none");
        e.stopPropagation();
    });

    $('.undermenu_mobile_v').click(function(e){
        $(this).children('.menu_hiden').toggle( "drop",300);
        e.stopPropagation();
    });

    $('.back').click(function(e){
        $(this).parent().parent().toggle( "drop",300);
        e.stopPropagation();
    });

    $('.live_search').click(function(e){
        e.stopPropagation();
    });

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