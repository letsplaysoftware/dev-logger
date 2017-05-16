(function(exports) {
  // shortenings
  var d = document;
  var aL = 'addEventListener';
  var bId = 'getElementById';
  var bT = 'getElementsByTagName';

  // globals
  var contentBody = undefined;
  var currentBody = undefined;
  var logBody = document.createElement('body');
      logBody.id = 'loggerbody';

  // document ready
  d[aL]('DOMContentLoaded', function() {
    // bind elements
    contentBody = d[bT]('body')[0];
    currentBody = contentBody;

    // toggle log if 3 touches
    d[aL]('touchstart', function() {
      if (event.touches.length > 2) {
        toggleLog();
      }
    });
  });

  // utility functions
  var toggleLog = function() {
    var cB = contentBody;
    var lB = logBody;
    var pN = 'parentNode';
    var rC = 'replaceChild';
    if (currentBody === cB) {
      cB = cB[pN][rC](lB, cB);
      currentBody = lB;
    } else {
      lB = lB[pN][rC](cB, lB);
      currentBody = cB;
    }
  }

  // exposed methods
  exports.log = function(args) {
    console.log.apply(console, Array(args));
    var el = document.createElement('li');
    el.innerText = args;
    logBody.append(el);
  }

})(this.logger = {});
