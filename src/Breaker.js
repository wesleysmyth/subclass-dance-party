var BreakDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="people"></span>');
  this.breakers = ['breaker', 'elvis', 'spiderman', 'hula'];
  this.$node.addClass(this.breakers[Math.floor(Math.random() * this.breakers.length)]);
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;
