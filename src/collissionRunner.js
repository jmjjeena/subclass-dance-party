var collissionRunner= function(){
  if(window.dancers){
    for (var i =0; i < window.dancers.length; i++) {
      for (var j = 0; j < window.dancers.length; j++) {
        if(i === j) {
          var temp = 0;
        } else {
          if(Math.abs(window.dancers[i][1].left - window.dancers[j][1].left) < 175) {
            if(window.dancers[i][0]==="ballerina"){
              window.dancers[i][1].$node[0].childNodes[1].style['backgroundColor']='red'

            }
            if(window.dancers[j][0]==="ballerina"){
              window.dancers[j][1].$node[0].childNodes[1].style['backgroundColor']='red'

            }
            if(window.dancers[i][0]==="makeSuperHeroDancer"){
              window.dancers[i][1].$node[0].childNodes[0].style['backgroundColor']='red'

            }
            if(window.dancers[j][0]==="makeSuperHeroDancer"){
              window.dancers[j][1].$node[0].childNodes[0].style['backgroundColor']='red'

            }
            if(window.dancers[i][0]==="discoDancer"){
              window.dancers[i][1].$node[0].childNodes[0].style['backgroundColor']='red'

            }
            if(window.dancers[j][0]==="discoDancer"){
              window.dancers[j][1].$node[0].childNodes[0].style['backgroundColor']='red'

            }
          }
        }
      }
    }
  }
  
}

// .css("background-color", "red");