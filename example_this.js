// this
/*
- Implicit Binding
- Explicit Binding
- new Binding
- window Binding
*/

// where is this function invoke?
var sayName = function(name) {
  console.log('Hello, ' + name);
}

sayName('Tyler');

// Implicit Binding
// left of the dot at call time
var me = {
  name: 'Tyler',
  age: 25,
  sayName: function() {
    console.log(this.name);
  }
};

me.sayName();

// example 2
var sayNameMixin = function(obj) {
  obj.sayName = function() {
    console.log(this.name);
  };
};

var me = {
  name: 'Tyler',
  age: 25
};

var you = {
  name: 'Joey',
  age: 21
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName(); // returns Tyler
you.sayName(); // returns Joey

// Example 2
var Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: 'Stacey',
      sayName: function() {
        console.log(this.name);
      }
    }
  };
};

var jim = Person('Jim', 42);
jim.sayName(); // returns Jim
jim.mother.sayName(); // returns Stacey

// Explicit Binding
// call, apply, bind
// .call and .apply immediately invoke the function
// .bind returns new function to call later.

var sayName = function(){
  console.log('My name is ' + this.name);
};

var stacey = {
  name: 'Stacey',
  age: 34
};

// call function with context of stacey - this references stacey
sayName.call(stacey);

var sayName = function(lang1, lang2, lang3){
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', '+ lang2 + ', '+ lang3 + '.');
};

var languages = ['Ruby', 'Python', 'Javascript'];

// .apply is same as .call exept I can pass in array and it will parse it for us.
sayName.apply(stacey, languages);

sayName.call(stacey, languages[0], languages[1], languages[2]);
// .same as call except it returns a new function (which we can call later) instead of invoking the function
sayName.bind(stacey, languages[0], languages[1], languages[2]);

var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('HERE');
new();

// new Binding
// this is bound to new object
var Animal = function(color, name, type) {
  // this = {}
  this.color = color;
  this.name = name;
  this.type = type;
}

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

// window Binding
var sayAge = function() {
  console.log(this.age); // this binds to window object
};

var me = {
  age: 25
};

sayAge(); // returns undefined
window.age = 35;
sayAge(); // returns 35
