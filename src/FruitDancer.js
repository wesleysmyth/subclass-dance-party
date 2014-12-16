var FruitDancer = function (top, left, timeBetweenSteps) {
	Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fruit"></span>');
  this.food = ['pickle', 'banana', 'taco'];
  this.$node.addClass(this.food[Math.floor(Math.random() * this.food.length)]);
};

FruitDancer.prototype = Object.create(Dancer.prototype);
FruitDancer.prototype.constructor = FruitDancer;
