var AnimalDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="animal"></span>');
  this.animals = ['tiger', 'giraffe', 'bear'];
  this.$node.addClass(this.animals[Math.floor(Math.random() * this.animals.length)]);
};

AnimalDancer.prototype = Object.create(Dancer.prototype);
AnimalDancer.prototype.constructor = AnimalDancer;

AnimalDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  $(this).on('mouseover', function (e) {
    //e.preventDefault();
    this.$node.addClass('roar');
  });
  $(this).on('mouseleave', function (e) {
    //e.preventDefault();
    this.$node.removeClass('roar');
  });
};
