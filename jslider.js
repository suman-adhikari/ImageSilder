
   
    (function($){

      $.fn.Sslide = function(option){

      $slide=$(this);
      $slider = $slide.find("img");
      image = [];
      alt =[];
    
    var defaults={
          width:"900px",
          height:"600px",

          slidetime:5000
    }

    var options = $.extend(defaults,option);

      $slider.attr({ 
      width:options.width,
      height:options.height

     });

    $slider.draggable({
      axis:'x',
      revert:true,
      stop:function(event, ui){
        if(ui.originalPosition.left>ui.position.left){
           nextImg();
        }
         else
           prevImg();
      }
    });
 
     // array of image src
     $slider.each(function(){
     	var a = $(this).attr("src");
        image.push(a);
      var b = $(this).attr("alt");
      alt.push(b);  
     });	
 
    $slide.append('<div class="img_txt" >'+ alt[0] +'</div>');
   
   // setInterval(nextImg, options.slidetime);
    
    // next image
    function nextImg(){
    	var i = currentImgIndex();
    	if(i<image.length-1){
    		changeImg(i+1);
    	}
    	else
        {
        	changeImg(0);
        }
    }

    //previous image
     function prevImg(){
    	var i = currentImgIndex();
    	if(i<image.length-1){
    		if(i==0){
    			changeImg(image.length-1);
    		}
    		else
    		{
    		changeImg(i-1);
    	    }
    	}
    	else
    	{
    		changeImg(i-1);
    	}
    }

    // click for next image
    $("#rightNav").click(function(){
      nextImg();
    });

    // click for next image
    $("#leftNav").click(function(){
      prevImg();
    });


     // image index in array
     function currentImgIndex(){
      debugger;
      var i = $.inArray($slider.attr("src"),image);
      return i;
    }


    // change image
      function changeImg(i){
          $slider.stop().animate({
            opacity:1,
          },400,function(){
                $slider.attr("src",image[i]);
                $(".img_txt").text(alt[i]);
                $("#main-container img").load(function(){
                    $slider.stop().animate({ 
                      opacity:1,
                    }, 200)
                });
          });
      };
    
    };
    })(jQuery);


   
