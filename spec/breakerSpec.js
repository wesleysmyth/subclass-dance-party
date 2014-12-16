describe("breaker", function() {

  var breakDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    //clock = sinon.useFakeTimers();
    breakDancer = new BreakDancer(10, 20, timeBetweenSteps);
    clock = sinon.useFakeTimers();
  });

  it("should have a jQuery $node object", function(){
    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have an animals property that is an array with at least one element", function() {
    expect(breakDancer.animals).to.be.an.instanceof(Array);
    expect(breakDancer.animals.length > 0).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(breakDancer, "step");
      expect(breakDancer.step.callCount).to.be.equal(0);
      clock.tick(breakDancer.step(timeBetweenSteps)); // ? it seems an extra tick is necessary...
      expect(breakDancer.step.callCount).to.be.equal(1);
      clock.tick(breakDancer.step(timeBetweenSteps));
      expect(breakDancer.step.callCount).to.be.equal(2);
    });
  });
});
