$("#button-next").on('click', function(event) {
    var leftStyle = $('.galary')[0].offsetLeft;
    if (leftStyle >=-600){
   $('.galary').animate({"left": leftStyle-200 + "px"}, 'slow')
    }
    
 });
 $("#button-prev").on('click', function(event) {
    var rightStyle = $('.galary')[0].offsetLeft;
    if (rightStyle <=-200) {
      $('.galary').animate({"left": rightStyle+200 + "px"}, 'slow')
    }
   //  console.log(rightStyle)
    
 });
