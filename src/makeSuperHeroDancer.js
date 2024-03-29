var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  //spiderman
  //<iframe src="https://giphy.com/embed/4PUc9Vm4zW5JsX2ibu" width="339" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/theseanwardshow-spiderman-spider-man-spidey-4PUc9Vm4zW5JsX2ibu">via GIPHY</a></p>
  top = 400;//dance line
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer "><img class="dancer superhero" src="https://media.giphy.com/media/WGkhN8KKOC4tW/giphy.gif" alt="Spiderman"></span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = this.step;

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.randomMove();
  };
};


makeSuperHeroDancer.prototype=Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor=makeSuperHeroDancer;

makeSuperHeroDancer.prototype.randomMove=function(){
  this.top=400*Math.random();
  this.left=$(window).width()*Math.random();
  this.setPosition(this.top,this.left+10);
}