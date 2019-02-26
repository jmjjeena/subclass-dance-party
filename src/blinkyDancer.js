var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //<iframe src="https://giphy.com/embed/yNrt7PROGv2uwDPE7W" width="440" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sandiegozoo-dance-dizzy-ostrich-yNrt7PROGv2uwDPE7W">via GIPHY</a></p>
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


makeBlinkyDancer.prototype=Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor=makeBlinkyDancer;