// this
console.log(this);
a = 5;
function ex(b) {
  console.log(this.a + b);
}
ex(3);
o = {a: 7};
ex.call(o, 3);
ex.apply(o, [3]);
ex2 = ex.bind(o);
ex2(4);
