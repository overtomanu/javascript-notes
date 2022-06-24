class Course {
    #price;
    constructor(title,length,price){
        this.title = title;
        this.length = length;
        this.price = price;
    }

    getContentPerPrice(){
        return this.length/this.#price;
    }

    getSummary(){
        return this.title+" having "+this.length+" minutes costing "+this.price;
    }

    set price(value){
        if( +value > 0){
            this.#price = value;
        } else {
            this.#price = 5;
        }
    }

    get price(){
        return this.#price+" dollars";
    }
}

let c1 = new Course("JS by Max",3000,10), c2 =  new Course("Spring Fwk by Chad",3500,12);
console.log('c1 :>> ', c1);
console.log('c2 :>> ', c2);
console.log('c1.getContentPerPrice() :>> ', c1.getContentPerPrice());
console.log('c1.getSummary() :>> ', c1.getSummary());
console.log('c2.getContentPerPrice() :>> ', c2.getContentPerPrice());
console.log('c2.getSummary() :>> ', c2.getSummary());

class PracticalCourse extends Course{
    constructor(title,length,price,numOfExercises){
        super(title,length,price);
        this.numOfExercises=numOfExercises;
    }

}

class TheoreticalCourse extends Course{
    publish(){
        console.log('Theoretical course published!! => '+this.title);
    }
}

let pracCourse = new PracticalCourse("Practicals in organic chemistry by ullman",90,5,10);
console.log('pracCourse :>> ', pracCourse);
let theoryCourse = new TheoreticalCourse("Theory of finite machines",60,8);
theoryCourse.publish();