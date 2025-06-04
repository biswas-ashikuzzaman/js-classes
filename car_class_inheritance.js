class Car {
    constructor(model,b,color) {
        this.model= model;
        this.brand= b ;
        this.color= color ;

    }
    speed () {
        return "This run so fast"
    }
}
const car1 = new Car("b13","Toyota","white");
document.write("This is my" +car1.brand + " "+ "It's color" + car1.color)
console.log(car1.speed());

class Bus extends Car {
    constructor (b,color,size, weight) {
        super(b,color);
        this.size =size;
        this.weight =weight;
    }
    feature () {
        return "This is bigger than car type vechile"
    }
}
const bus1 = new Bus ("Hundai","Red", "100 m","200Kg")
console.log(bus1)
document.write(bus1.b + bus1.color)