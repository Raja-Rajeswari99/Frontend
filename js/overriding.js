let animal={
    walk(){
        console.log("animal walk");
    }
};

let rabbit ={
    __proto__:animal
};
rabbit.walk=function()
{
    console.log("rabbit hops");
};
rabbit.walk();
animal.walk();