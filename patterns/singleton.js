let CounterSingleton = (() => {
  let instance = null;
  class Counter { // class is private
    #counter;
    constructor () { this.#counter = 0; }
    add () { return ++this.#counter; }
    count () { return this.#counter; }
  }
  return {
    get: () => {
      if (!instance) instance = new Counter();
      return instance;
    }
  };
})();

let a = CounterSingleton.get(), b = CounterSingleton.get();
a.add();
console.log(a.count()); // 1
b.add();
console.log(b.count()); // 2
