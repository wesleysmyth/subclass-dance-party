var SquareDancer = function (top, left, timeBetweenSteps) {
	Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square"></span>');
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function () {
  this.$node.toggle();
};
