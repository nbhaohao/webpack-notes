class Greeter {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    return `hello, ${this.name}`;
  }
}

const a = "ffff";

let greeter = new Greeter("zzh");
let greeter2 = new Greeter(a);

console.log(greeter.greet());
new Promise((resolve, reject) => {});
console.log("Promise", Promise, a, greeter2);
