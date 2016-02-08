var isPlaying = false;


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
  var sounds = [1/*, 2, 3, 4, 5*/].map(function(id) {
    return new Sound(id);
  });

  $('body').on('click', function(e) {
    if (isPlaying === false) {
      //sounds[Math.floor(Math.random() * 5)].play();
      sounds[Math.floor(Math.random())].play();

      $('#binky-meem').addClass('grumbling');

      isPlaying = true;
    }
  });
});
