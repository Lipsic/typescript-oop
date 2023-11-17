class Person {
  public name: string;
  protected birthyear: string;
  constructor(name: string, birthyear: string) {
    this.name = name;
    this.birthyear = birthyear;
  }
  public introduceSelf(): void {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class WorkerClass extends Person {
  public constructor(name: string, birthyear: string) {
    super(name, birthyear);
  }
}

const dave = new WorkerClass("Dave", "26-05-2000");
dave.introduceSelf();

console.log(Object.getPrototypeOf(dave));
