Array.prototype.parse2D = function(){
    const rows = []
    for(let i = 0 ; i < this.length; i+=16){
        rows.push(this.slice(i, i+16))
    }
    return rows
    
} 

Array.prototype.crateObjectsFrom2D = function(){
    const objects = []
    this.forEach((row, y) => {
        row.forEach((Symbol,x)=>{
            if(Symbol === 292){
                objects.push(
                    new CollisionBlock({
                    position:{
                        x: x * 64, 
                        y: y*64,
                    },
                }))
            }
        })
    });
    return  objects
}

