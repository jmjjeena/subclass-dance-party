var makeDiscoDancer = function(top, left, timeBetweenSteps) {
  //<iframe src="https://giphy.com/embed/nxIpDhEK5xS8M" width="480" height="215" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/baby-minions-loves-nxIpDhEK5xS8M">via GIPHY</a></p>
  makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step;

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };
};


makeDiscoDancer.prototype=Object.create(makeDancer.prototype);
makeDiscoDancer.prototype.constructor=makeDiscoDancer;