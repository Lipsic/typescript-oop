"use strict";
class Person {
    constructor(name, birthyear) {
        this.name = name;
        this.birthyear = birthyear;
    }
    introduceSelf() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
class WorkerClass extends Person {
    constructor(name, birthyear) {
        super(name, birthyear);
    }
}
const dave = new WorkerClass("Dave", "26-05-2000");
dave.introduceSelf();
console.log(Object.getPrototypeOf(dave));
//# sourceMappingURL=app.js.map