// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function () {
  this.$node.addClass('lineup');
};

Dancer.prototype.tango = function (dancer) {
  var tempTop = this.top;
  var tempLeft = this.left;
  this.top = dancer.top;
  this.left = dancer.left;
  dancer.top = tempTop;
  dancer.left = tempLeft;
  this.setPosition.call(this, this.top, this.left);
  dancer.setPosition.call(dancer, dancer.top, dancer.left);
};

