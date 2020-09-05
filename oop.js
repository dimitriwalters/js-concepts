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
