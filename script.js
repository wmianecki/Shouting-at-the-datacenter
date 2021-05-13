$(document).ready(function(){
  $('#left').hover(function(){
      $(this).addClass('blur');
  }).mouseout(function(){
      $(this).removeClass('blur');
  });
});