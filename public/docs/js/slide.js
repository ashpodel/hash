$(function() {
  var center = $(window).width()/2;
  
  var index = 0; //where we are in the image queue
  var offset = $('.items:eq(0) div:eq(index)').width();
  alert(offset);
  $('.items').css('left', center-offset);  
  var total = $('.items:eq(0) div').length; //total number of images ###NEED TO MAKE IT WORK FOR BOTH SLIDESHOWS
  $('.next').click(function(){
    index++; //increase the index
    $('.items').stop().animate({left:-500*index}, 500); //move the box left in 500 seconds
    return false;
  })
  $('.prev').click(function(){
    index--; //reduce the index by one
    $('.items').stop().animate({left:500*index}, 500);
    return false;
  })


  //Bind arrow keys to the slideshow
  $(document).bind('keydown',function(evt) {
    if (evt.keyCode == 39){
      $('.next').trigger('click');
    }
    if (evt.keyCode == 37){
      $('.prev').trigger('click');  
    } 
  });   

  //alert(center);
  //Trying to get the keypad to work
});

        var hotspot = false;
        var activeGallery;
        if(hotspot){
          $(document).mousemove(function(){
            hotspot = false;
          })
        }
        $('.galleryBG').mousemove(function(e){
            hotspot = true;
            activeGallery = $(this); 
        });

        $(document).bind('keydown',function(evt) {
          if (evt.keyCode == 39){
            if(hotspot){
              alert('next');
            }
            //$('.next').trigger('click');
          }
          if (evt.keyCode == 37){
            if(hotspot){
              alert('prev');  
            }
            //$('.prev').trigger('click');  
          } 
        }); 