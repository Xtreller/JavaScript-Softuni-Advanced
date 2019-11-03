class Circle{
    constructor(rad,){
        this.radius = rad;
    }
    get diameter() {return 2*this.radius;}
    set diameter(diameter){
        this.radius = diameter/2;
    }
    get area(){
        return Math.PI * Math.pow(this.radius,2)
    }
}