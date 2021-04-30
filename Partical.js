class Partical {
    constructor(x,y){

        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    
    var options = {

        isStatic:false,
        restitution: 1.7,
        friction: 1.2,
        Density:1.3

    }
   
}
    display() {
        
    }


}





















