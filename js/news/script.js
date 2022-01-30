$(document).ready(function(){

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
  
      
  
      $($('.burger_menu_item')).click(function(){
        $('.burger_button').toggleClass('active');
        $('body').toggleClass('lock');
        $('#information_col').toggleClass('hiden');
        
        if( $('#burger_menu').hasClass('active')){
          $('#burger_menu').toggleClass('active').fadeOut(0);
        }
        else{
          $('#burger_menu').toggleClass('active').fadeIn(0);
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