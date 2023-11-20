function createScoreboard(){
    const score ={
       points:0,
       draw(){
           context.font = '50px serif';
           context.fillStyle = 'black';
           context.fillText('Hello Wolrd', 50,90);
       },
       update(){
   
       }
    }
    return score;
   }