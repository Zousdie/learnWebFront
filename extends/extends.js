'use strict';

function Super(name) {
    this.name = name;
    this.colors = ["red", "blue"];
}

Super.prototype.sayName = function () {
    console.log(this.name);
};

function Sub(name, age) {
    Super.call(name);
    this.age = age;
}

inherits(Sub, Super);

Sub.prototype.sayAge = function () {
    console.log(this.age);
};

function inherits(subType, superType) {
    var F = function () {};
    F.prototype = superType.prototype;
    subType.prototype = new F();
    subType.prototype.constructor = subType;
}

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    say() {
        return "Hello, " + this.name;
    }
}
