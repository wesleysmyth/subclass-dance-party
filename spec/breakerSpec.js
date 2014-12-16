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

  it("should have a spin method", function() {
    expect(breakDancer.spin).to.be.an.instanceof(Function);
  });

  it("should have at least one dancer", function () {
    expect(breakDancer.breakers.length > 0).to.be.true;
  });

  describe("breaker", function(){
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
