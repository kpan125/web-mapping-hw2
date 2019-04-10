$('#button1').on('click', function() {
  $('body').css('background', '#EB8A44');
  $('.banner-text').css('background', '#8EBA43');
  $('.banner-text').css('color', '#EDADAA');
  $('.banner-text').css('border', '5px solid #EDADAA');
  $('button').css('background', '#F9DC24');
  $('button').css('color', 'black');
  //some lag time when initially loading picture
  $(".picture").fadeIn( 'slow', function(){
  $('.picture').attr('src', " https://globalcosmeticsnews.com/wp-content/uploads/2015/07/0d012c529b85966704821973c01a8a0f.jpg").fadeIn(3000);
})
//fade in doesn't work
});

$('#button2').on('click', function() {
  $('body').css('background', '#A2C523');
  $('.banner-text').css('background', '#A87707');
  $('.banner-text').css('color', '#2E4600');
  $('.banner-text').css('border', '5px solid #2E4600');
  $('button').css('background', 'green');
  $('button').css('color', 'white');
  $('.picture').attr('src', "http://dursocapital.com/wp-content/uploads/2015/09/7033580-foggy-forest.jpg");
});


$('#button3').on('click', function() {
  $('body').css('background', '#57068c');
  $('.banner-text').css('background', '#B8B8B8');
  $('.banner-text').css('color', '#330682');
  $('.banner-text').css('border', '5px solid #330682');
  $('button').css('background', '#8900E1');
  $('button').css('color', 'white');
  $('.picture').attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nyu_short_black.svg/1280px-Nyu_short_black.svg.png");
});
