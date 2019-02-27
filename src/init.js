$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var left;
    if(dancerMakerFunctionName === 'discoDancer' || dancerMakerFunctionName === 'danceParty'){
        left= ($( "img.disco" ).size())*175;
    }else{
      left=$("body").width() * Math.random();
    }
    // make a dancer with a random position
    if(dancerMakerFunctionName !== 'danceParty'){
      var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      left,
      Math.random() * 1000
      );
      $('body').append(dancer.$node);
      window.dancers.push([dancerMakerFunctionName,dancer]);
    }else{
      var dancers = dancerMakerFunction(0,0,0);
      for(var i=0;i<dancers.length;i++){
        $('body').append(dancers[i].$node);
        window.dancers.push([dancerMakerFunctionName,dancers[i]]);
      } 
    };
  });
    
  $('.addLineUpButton').on('click', function(event) {
    var getLinedUp = $(this).data('lineup-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var lineUpFunction = window[getLinedUp];
    lineUpFunction();
    
  });
  $('.addResetButton').on('click', function(event) {
    var reset = $(this).data('reset-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var resetFxn = window[reset];
    resetFxn();
    
  });
});

