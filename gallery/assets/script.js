 jQuery(document).ready(function($) {

    $(".scroll a, .navbar-brand, .gototop").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
        $(".scroll li").removeClass('active');
        $(this).parents('li').toggleClass('active');
      });

    jQuery("#div_photoGallery").nanoGallery({
      userID:'136074520@N06',kind:'flickr',thumbnailWidth:'auto',thumbnailHeight:160,  //110,
      viewerDisplayLogo:true,
      locationHash:false,
      thumbnailHoverEffect:[{'name':'labelSlideUp','duration':300}],
      thumbnailLabel:{display:true,position:'overImageOnBottom',descriptionMaxLength:50},
      thumbnailLazyLoad:true,
      theme:'clean',
      colorScheme:'light',
      locationHash: false,
      level1: { thumbnailWidth: 200, thumbnailHeight: 120 }
    });
});






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });
