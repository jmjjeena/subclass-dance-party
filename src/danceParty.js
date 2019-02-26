var danceParty = function(top, left, timeBetweenSteps) {
  //left should equal zero to start
  var dancers = [makeSuperHeroDancer, discoDancer, ballerina];
  var dancePartyPpl = [];
  for (left; left < $(window).width(); left){
    for (var i = 0; i < 3; i++){
      var dancer= new dancers[i](top, left, 500);
      dancer['step']=function(){setTimeout(this.step.bind(this), this.timeBetweenSteps);};
      dancePartyPpl.push(dancer);
      left = left + 175;
      // if (dancePartyPpl[i].) {
      //   dancePartyPpl[i].step = function(){};
      // } else if (dancePartyPpl[i].crossScreenDance){
      //   dancePartyPpl[i].crossScreenDance = function(){};
    };
  };
  return dancePartyPpl;
};


danceParty.prototype = Object.create(makeDancer.prototype);
danceParty.prototype.constructor = danceParty;
