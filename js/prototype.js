let car ={
    wheels:4
};
let bmw = {
    parking_assistance:yes
};

bmw.__proto__=car;

console.log(car.wheels);

