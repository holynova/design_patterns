const log = console.log.bind(console);

class Counter {
  static instance = null;
  constructor(initialNumber = 0) {
    log("constructor", Counter.instance);
    if (Counter.instance) {
      return Counter.instance;
    }
    this.cnt = initialNumber;
    Counter.instance = this;
    return this;
  }

  updateValue(number = 0) {
    this.cnt = number;
  }

  increment() {
    this.cnt++;
  }

  decrement() {
    this.cnt--;
  }
}

function main() {
  let c1 = new Counter(100);
  // log(c1);
  c1.increment();
  c1.increment();
  c1.increment();

  let c2 = new Counter();
  c2.increment();
  let c3 = new Counter();

  log(c1.cnt);
  log(c2.cnt);
  log(c3.cnt);
}

main();
