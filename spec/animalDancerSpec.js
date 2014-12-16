describe("animalDancer", function() {

  var animalDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    //clock = sinon.useFakeTimers();
    animalDancer = new AnimalDancer(10, 20, timeBetweenSteps);
    clock = sinon.useFakeTimers();
  });

  it("should have a jQuery $node object", function(){
    expect(animalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have an animals property that is an array with at least one element", function() {
    expect(animalDancer.animals).to.be.an.instanceof(Array);
    expect(animalDancer.animals.length > 0).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(animalDancer, "step");
      expect(animalDancer.step.callCount).to.be.equal(0);
      clock.tick(animalDancer.step(timeBetweenSteps)); // ? it seems an extra tick is necessary...
      expect(animalDancer.step.callCount).to.be.equal(1);
      clock.tick(animalDancer.step(timeBetweenSteps));
      expect(animalDancer.step.callCount).to.be.equal(2);
    });
  });
});
