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

    $('.button_for_ul_drop_list').click(function(){
      let drop_menu_mass = $('.button_for_ul_drop_list');
      
      if($(this).children('img').hasClass('active')){
        $(this).next().slideUp(300);
        $(this).children('img').toggleClass('active');
      }
      else{
        $(this).next().slideDown(300);
        $(this).children('img').toggleClass('active');
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

    $('.option_ul_item').click(function(){

      if($(this).children('input').is(':checked')){
        $(this).children('input').prop('checked', false);
      }
      else{
        $(this).children('input').prop('checked', true);
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
          console.log($(rating_active));

        }

        function setRatingActiveWidth(){
          let index = $(rating_value).text().trim()
          let rating_active_width = index / 0.05;
          $(rating_active).css("width",`${rating_active_width}%`);
        }

      }

});