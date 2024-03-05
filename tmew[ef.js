//this function help to not go te paddle out of canvas
function paddleInCanvas(){
    if(paddle1Y+paddle1Height > height){
      paddle1Y=height-paddle1Height;
    }
    if(paddle1Y < 0){
      paddle1Y =0;
    }
   
    
  }