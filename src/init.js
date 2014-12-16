$(document).ready(function(){
  window.dancers = [];
  window.backgrounds = ['floor', 'space', 'beach', 'clouds'];
  $("body").addClass(backgrounds[0]);

  setInterval(function () {
    var bkgnd = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    var background = 'url("img/' + bkgnd + '.jpg")';
    $("body").css("background-image", background);
    console.log("Changing");
  }, 8000);

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name"); //calls the appropriate maker function for any subclass

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var top = $("body").height() * Math.random();
    var left = $("body").width() * Math.random();

    var dancer = new dancerMakerFunction(top, left, Math.random() * 1000);

    dancers.push([dancer, dancer.top, dancer.left]); //add to the global array object

    dancer.setPosition(top, left); //set Position
    dancer.step(); //call step


    $('body').append(dancer.$node); //add node to the body

    //Adds a hover effect for animal class
    $('.tiger').on('mouseover', function () {
      $(this).addClass('roar');
    });

    $('.tiger').on('mouseleave', function () {
      $(this).removeClass('roar');
    });

  });

});

//Lineup function
$('#button').on('click', function () {
  for (var i = 0; i < dancers.length; i++) {
    dancers[i][0].lineUp();
  }
});

$('#interact').on('click', function () {
  interact();
});

var interact = function () {
  var closest = []; //store two objects and the smallest between them - will be replaced
  //iterate through dancers array
  for (var i = 0; i < dancers.length-1; i++) {
    //compare the i element to the every other element and find its closest neighbor.
    var results = [];
    var x1, x2, y1, y2;
    var distance;
    var smallest = undefined;
    for (var j = 1; j < dancers.length; j++) {
      x1 = dancers[i][1];
      x2 = dancers[j][1];
      y1 = dancers[i][2];
      y2 = dancers[j][2];
      distance = Math.sqrt(Math.pow((x1+x2),2) + Math.pow((y1+y2),2));
      if (distance < smallest || smallest === undefined) {
        results[0] = dancers[i];
        results[1] = dancers[j];
        results[2] = distance;
        dancers[i][0].tango(dancers[j][0]);
      }
    }
    closest.push(results);
  }
};
      //splice off the i element and its closest neighbor
      //push those as a sub array, to the closest array

      //iterate through the closest array and call a function for interaction

