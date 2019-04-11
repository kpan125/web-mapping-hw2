// all of these jquery statements serve the same function
// when one of the buttons is clicked, manually set colors and other page properties
// including image and widget sources to match the defined theme for each button
$('#button1').on('click', function() {
  $('body').css('background', '#EB8A44'); //changes page background color
  $('.banner').css('background', '#8EBA43'); //changes banner background color
  $('.banner').css('color', '#EDADAA'); //changes banner text color
  $('.banner').css('border', '5px solid #EDADAA'); //changes banner border color
  $('button').css('background', '#F9DC24'); //changes button color
  $('button').css('color', 'black'); //changes button text color
  //some lag time when initially loading picture and embedded widget
  //changes image source
  $('#picture').attr('src', " https://globalcosmeticsnews.com/wp-content/uploads/2015/07/0d012c529b85966704821973c01a8a0f.jpg");
  //changes embedded widget source
  $('#sound-widget').prop('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337113552&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
  $('#sound-widget').css('visibility','visible') //sets embedded widget to visible
});

$('#button2').on('click', function() {
  $('body').css('background', '#A2C523');
  $('.banner').css('background', '#A87707');
  $('.banner').css('color', '#2E4600');
  $('.banner').css('border', '5px solid #2E4600');
  $('button').css('background', 'green');
  $('button').css('color', 'white');
  $('#picture').attr('src', "http://dursocapital.com/wp-content/uploads/2015/09/7033580-foggy-forest.jpg");
  $('#sound-widget').prop('src', "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/144161464&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");
  $('#sound-widget').css('visibility','visible')
});

$('#button3').on('click', function() {
  $('body').css('background', '#57068c');
  $('.banner').css('background', '#B8B8B8');
  $('.banner').css('color', '#330682');
  $('.banner').css('border', '5px solid #330682');
  $('button').css('background', '#8900E1');
  $('button').css('color', 'white');
  $('#picture').attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nyu_short_black.svg/1280px-Nyu_short_black.svg.png");
  $('#sound-widget').prop('src', "https://www.youtube.com/embed/LoBDDkqmdmM");
  $('#sound-widget').css('visibility','visible')

});
