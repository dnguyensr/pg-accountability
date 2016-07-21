$(document).ready(function() {
  $(window).one('click', function() {
    $('#outer').show();
    });
  $('html').on('click', '.yes', function(){
    playSound('trophies.mp3')
    alert("yes!");
  });
  $('html').on('click', '.no', function(){
    alert("no!");
  });
});


function playSound(sound_file) {
  var audio = document.createElement("audio");
  audio.src = "/Audio/" + sound_file;
    audio.play();
}
