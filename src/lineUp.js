var lineUp = function() {
  //left should equal zero to start
  window.dancers; 
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i][1].stop();
    
    window.dancers[i][1].left = 175*i;
    window.dancers[i][1].pastleft = 175*i;
    window.dancers[i][1].timeBetweenSteps = 500;
    if(window.dancers[i][0]!=='discoDancer'){
      window.dancers[i][1]['step']=function(){
        setTimeout(this.setPosition(400,this.pastleft), this.timeBetweenSteps);
      };
    };
    if(window.dancers[i][0]==='discoDancer'){
      window.dancers[i][1]['step']=function(){
        this.$node.show();
        $('.disco').css("display", "inline");
        this.setPosition(350,this.pastleft);

      };
    };
    
  };
};


lineUp.prototype = Object.create(makeDancer.prototype);
lineUp.prototype.constructor = lineUp;

