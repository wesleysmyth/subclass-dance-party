var FruitDancer = function (top, left, timeBetweenSteps) {
	Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fruit"></span>');
};

FruitDancer.prototype = Object.create(Dancer.prototype);
FruitDancer.prototype.constructor = FruitDancer;

FruitDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggleClass('spin');
};
