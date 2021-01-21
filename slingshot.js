class Slingshot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=point
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
fly(){
    this.chain.bodyA=null
}
    display(){
        if (this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.pointB;
        strokeWeight(4);
        line(posB.x, posB.y, posA.x, posA.y);
    } }
    
}