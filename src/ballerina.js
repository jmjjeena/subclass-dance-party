var ballerina = function(top, left, timeBetweenSteps) {
  //<iframe src="https://giphy.com/embed/nxIpDhEK5xS8M" width="480" height="215" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/baby-minions-loves-nxIpDhEK5xS8M">via GIPHY</a></p>
  top = 400;//dance line
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img class=" dancer ballerina" src="https://media.giphy.com/media/WwfI2LylEaCIe90wj0/giphy.gif" alt="squid balerina"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition(top, left);
  var oldStep = this.step;

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.crossScreenDance();
  };
};


ballerina.prototype = Object.create(makeDancer.prototype);
ballerina.prototype.constructor = ballerina;

ballerina.prototype.crossScreenDance=function(){
  this.setPosition(this.top,this.left+10);
  this.left=this.left+10;
  if(this.left >($(window).width()-175)){
      this.left=0;
  }
}