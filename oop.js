// creating objects
var o1 = {};
var o2 = new Object();
o1['prop'] = 'value';
o2['prop'] = 'value';
o1.prop2 = 'value2';
o2.prop2 = 'value2';
console.log(o1, o2);

// constructors
function MyObject(v1, v2) {
    this.prop = v1;
    this.prop2 = v2
}
var o3 = new MyObject('value', 'value2')
o3.prop2 = 'value3';
console.log(o3);
function MyObject2(v1, v2) {
    this.propPublic = v1;
    var propPrivate = v2
    this.getPropPrivate = () => propPrivate;
}
var o4 = new MyObject2('value', 'value2');
console.log(o4.propPublic);
console.log(o4.propPrivate);
console.log(o4.getPropPrivate());

// classes
class MyClass {
  #prop2;
  constructor(v1, v2) {
    this.prop = v1;
    this.#prop2 = v2;
  }
  getProp2 = () => this.#prop2
}
var o5 = new MyClass('value', 'value2');
console.log(o5.prop);
console.log(o5.getProp2());
class ChildClass extends MyClass {
  constructor(v1, v2, v3) {
    super(v1, v2)
    this.prop3 = v3
  }
}
var o6 = new ChildClass('value', 'value2', 'value3');
console.log(o6);

// prototypes
function ParentProto(v1, v2) {
    this.prop = v1;
    this.prop2 = v2
}
function ChildProto(v1, v2, v3) {
  ParentProto.call(this, v1, v2);
  this.prop3 = v3;
}
ChildProto.prototype = Object.create(ParentProto.prototype);
Object.defineProperty(ChildProto.prototype, 'constructor', {
  value: ChildProto,
  enumerable: false,
  writable: true
});
console.log(ParentProto.prototype.constructor);
console.log(ChildProto.prototype.constructor);
var o7 = new ChildProto('value', 'value2', 'value3');
console.log(o7);
