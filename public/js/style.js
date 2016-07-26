$(document).ready(function() {
  $(window).one('click', function() {
    $('#outer').show();
    });
  $('body').on('keydown', function(e){
    if(e.which==53){
      playSound(trophies);
    }
    else if(e.which==101){
      playSound(trophies);
    }
  });
  $('html').on('click', '.yes', function(){
    playSound(trophies);
  });
  $('html').on('click', '.no', function(){
    // stopAudio();
    var shame = randomShame();
    playSound(shame);
  });
});

var trophies = "https://s3-us-west-2.amazonaws.com/missingfursons/trophies.mp3"
var shame1 = "https://s3-us-west-2.amazonaws.com/missingfursons/shame1.mp3";
var shame2 = "https://s3-us-west-2.amazonaws.com/missingfursons/shame2.mp3";
var shame3 = "https://s3-us-west-2.amazonaws.com/missingfursons/shame3.mp3";
var shame4 = "https://s3-us-west-2.amazonaws.com/missingfursons/shame4.mp3";

function playSound(sound) {
  var audio = document.createElement("audio");
  audio.src = sound;
  audio.play();
}

function randomShame() {
  arr =[shame1, shame2, shame3, shame4]
  var shame = arr[Math.floor(Math.random() * 4)];
  return shame
}

function stopAudio(){
  $('html').find('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
  });
  // var audio = $('audio');
  // audio.pause();
  // var sounds = document.getElementsByTagName('audio');
  // for(i=0; i<sounds.length; i++) sounds[i].pause();
};
