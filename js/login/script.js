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

    $('.password').click(function(){    

    });

    $('.burger_menu_item').click(function(){
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

    $('.see_password').click(function(){

      if($(this).hasClass('active')){
        
        $(this).toggleClass('active');
        $(this).attr('src','../img/login/section/not_see.svg')
        $(this).prev().attr('type','password');
      }
      else{
        $(this).toggleClass('active');
        $(this).attr('src','../img/login/section/see.svg')
        $(this).prev().attr('type','text');
      }

    });

    $('#password_input').focus(function(){
      $(this).parent().css({
        'box-shadow':"-2px 4px 14px 2px rgba(255, 222, 121, 0.705)"
      });
    });

    $('#password_input').focusout(function(){
      console.log($(this).parent());
      $(this).parent().css({
        'box-shadow':"none"
      });
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