(function(window, document, undefined) {
  var scaleX = 1;
  var scaleY = 1;
  var rotateZ = 0;

  var videoChatHasStarted = function() {
    return document.querySelectorAll('video').length > 1;
  };

  window.addEventListener('DOMContentLoaded', function(event) {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    head.appendChild(style);

    var setStyle = function() {
      var transform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ') rotateZ(' + rotateZ + 'deg)';

      var styleHTML = '' +
        '.stream-podium {' +
        '  background: #000 !important' +
        '}' +
        '.stream-podium video {' +
        '  -webkit-transform: translate(-50%, -50%) ' + transform + ' !important;' +
        '  transform: translate(-50%, -50%) ' + transform + ' !important;' +
        '}' +
        '' +
        '@media screen and (orientation: landscape) {' +
        '  .stream-podium:-webkit-full-screen video {' +
        '    -webkit-transform: translateY(-50%) ' + transform + ' !important;' +
        '    transform: translateY(-50%) ' + transform + ' !important;' +
        '  }' +
        '' +
        '  .stream-podium:fullscreen video {' +
        '    -webkit-transform: translateY(-50%) ' + transform + ' !important;' +
        '    transform: translateY(-50%) ' + transform + ' !important;' +
        '  }' +
        '}' +
        '' +
        '@media screen and (orientation: portrait) {' +
        '  .stream-podium:-webkit-full-screen video {' +
        '    -webkit-transform: translateX(-50%) ' + transform + ' !important;' +
        '    transform: translateX(-50%) ' + transform + ' !important;' +
        '  }' +
        '' +
        '  .stream-podium:fullscreen video {' +
        '    -webkit-transform: translateX(-50%) ' + transform + ' !important;' +
        '    transform: translateX(-50%) ' + transform + ' !important;' +
        '  }' +
        '}' +
      '';
      style.innerHTML = styleHTML;
    };
    setStyle();

    window.addEventListener('keydown', function(event) {
      if (videoChatHasStarted()) {
        if (event.shiftKey || event.ctrlKey) {
          if (event.keyCode === 37 || event.keyCode === 38) {
            rotateZ += 45;
          }

          if (event.keyCode === 39 || event.keyCode === 40) {
            rotateZ -= 45;
          }
        } else {
          if (event.keyCode === 37 || event.keyCode === 39) {
            scaleX *= -1;
          }

          if (event.keyCode === 38 || event.keyCode === 40) {
            scaleY *= -1;
          }
        }
      }

      setStyle();
    });
  });
})(this, this.document);
