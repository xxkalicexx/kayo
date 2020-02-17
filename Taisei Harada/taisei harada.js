// JavaScript Document

 
	   $(function(){
		  $('a[href^="#"]').click(function(){
			var speed = 800;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		  });
		});

	
	  $(function(){
		$('a[href^=#]').click(function(){
		 var speed = 800;
		 var href= $(this).attr("href");
		 var target = $(href == "#" || href == "" ? 'html' : href);
		 var position = target.offset().top;
		 $("html, body").animate({scrollTop:position}, speed, "swing");
	     return false;
		});
	
      $(window).scroll(function() {
        $(".fadein").each(function() {
          var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass("scrollin");
          }
        });
      });
   
	
      $(window).scroll(function() {
        $(".fadein2").each(function() {
          var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass("scrollin");
          }
        });
      });
   
