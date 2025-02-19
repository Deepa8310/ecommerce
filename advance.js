import name, { add,multiply } from "./calculator.js";

const product = {
    name: "laptop",
    price: 1500,
    brand: "dell",
    details: function () {
        return `${this.brand} ${this.name} costs ${this.price}`;
    },
};
console.log(product.details());

class Person {
    constructor(name, age,college,degree) {
        this.name = name;
        this.age = age;
        this.college = college;
        this.degree = degree;
    }
    greet() {
        console.log(`my name is ${this.name}`);
        console.log(`my age is ${this.age}`);
        console.log(`my college is ${this.college}`);
        console.log(`my degree is ${this.degree}`);
    }
} 
class Student extends Person {
    constructor(name,age,college,degree) {
        super(name,age);
        this.college = college;
        this.degree = degree;
    }
}


const john = new Person("jhon",10,"gh haveri","bca");
john.greet();
console.log(john.college);

console.log(add(1,2));
console.log(multiply(1,2));
console.log(name);

const getData = new Promise((resolve,reject) => {
    setTimeout(() => {
        let success = true;
        if(success) {
            resolve("data fetched successfully");
        }else{
            reject("error fetching data");
        }
    },2000)
});
getData 
.then((responce) => console.log(responce))
.catch((error) => console.log(error));

asyn function fetchProduct(){
    try{
        let respoce = await fetch("https://fakestoreapi.com/product");
        let data = await responce.json();
        console.log(data);
    }catch (error) {
        console.log("error fetching data:",error);
    }
}

fetchProducts();