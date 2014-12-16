var BreakDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="people"></span>');
  this.breakers = ['breaker', 'elvis', 'spiderman', 'hula'];
  this.$node.addClass(this.breakers[Math.floor(Math.random() * this.breakers.length)]);
  this.spin.call(this);
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.spin = function () {
  var obj = $(this.$node);
  obj.on('mouseover', function () {
    $(this).addClass("spin");
    setTimeout(function () {
      console.log(this);
      obj.removeClass("spin");
    }, 2000);
  });
};
