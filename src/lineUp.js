var lineUp = function() {
  //left should equal zero to start
  window.dancers; 
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i][1].stop();
    if(window.dancers[i][0]==='discoDancer'){
      window.dancers[i][1]['step']=function(){
        this.$node.show();
        this.left=pastleft;
        $('.disco').css("display", "inline");
      };
    }
    window.dancers[i][1].left = 175*i;
    window.dancers[i][1].pastleft = 175*i;
    window.dancers[i][1].timeBetweenSteps = 500;
    if(window.dancers[i][0]!=='discoDancer'){
      window.dancers[i][1]['step']=function(){
        setTimeout(this.setPosition(400,this.pastleft), this.timeBetweenSteps);
      };
    };
    
  };
};


lineUp.prototype = Object.create(makeDancer.prototype);
lineUp.prototype.constructor = lineUp;

