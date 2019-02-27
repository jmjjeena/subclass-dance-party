var discoDancer = function(top, left, timeBetweenSteps) {
  //<iframe src="https://giphy.com/embed/yNrt7PROGv2uwDPE7W" width="440" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sandiegozoo-dance-dizzy-ostrich-yNrt7PROGv2uwDPE7W">via GIPHY</a></p>
  top = 350;
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer disco"><img class="dancer disco" src="https://media.giphy.com/media/NyGJMMLzoI2Pu/giphy.gif" alt="disco dancer"></span>');
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
    this.$node.toggle();
  };
};


discoDancer.prototype=Object.create(makeDancer.prototype);
discoDancer.prototype.constructor=discoDancer;
