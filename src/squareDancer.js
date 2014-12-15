var squareDancer = function (top, left, timeBetweenSteps) {
	makeDancer.call(this, top, left, timeBetweenSteps);
	this.oldStep = this.step;
};

squareDancer.prototype = Object.create(makeDancer.prototype);
squareDancer.prototype.constructor = squareDancer;

squareDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};