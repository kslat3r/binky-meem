var isPlaying = false;
var prevSound = null;

var Sound = function(fileId) {
  this.fileId = fileId;

  this.element = document.createElement('audio');
  this.element.setAttribute('src', '/sounds/meem' + fileId + '.wav');

  $(this.element).on('ended', function() {
    $('#binky-meem').removeClass('grumbling');

    isPlaying = false;
  });
};

Sound.prototype.play = function() {
  this.element.play();
}


$(document).ready(function() {
  FastClick.attach(document.body);

  var preload = document.createElement('img');
  preload.src = '/images/meem-grumbling.png';

  var sounds = [1, 2, 3, 4, 5, 6].map(function(id) {
    return new Sound(id);
  });

  var getSound = function(prevSound) {
    var nextSound = sounds[Math.floor(Math.random() * sounds.length)];

    if (prevSound !== null && nextSound.fileId === prevSound.fileId) {
      return getSound(prevSound);
    }

    return nextSound;
  };

  $('body').on('click', function(e) {
    if (isPlaying === false) {
      prevSound = getSound(prevSound);
      prevSound.play();

      $('#binky-meem').addClass('grumbling');

      isPlaying = true;
    }
  });
});
