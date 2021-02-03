// 21312 Julio Costa Beyeler FEWD Java Script Lab 3
// Question 3) 
  const greet = function() {
  return "Haydo!";
};

let salutation = greet();
console.log(salutation);

// Question 4) 
  function echo(sound) {
  return sound;
};

console.log(echo("Haydo!"));

// Question 5) 
  function greett(name) {
  return "Hello " + name + "!"
};

console.log(greett("Julio"));

// Question 6) x = Where is Jacky?
  var whereIs = function(name) {
  return "Where is " + name + "?";
};

var x = whereIs("Jacky");

console.log(x)

// Question 7) x = Hi Selva! Hi Pola!
  var hi = function(name) {
  return 'Hi ' + name + '!';
};

var h1 = hi('Selva');
var h2 = hi('Pola');
var x = h1 + ' ' + h2;

console.log(x);

// Question 8) 
  function shout(string) {
  return console.log(string+string);
}

shout('Fire')

// Question 9) x = Roy and Roy
  var double = function(name) {
  return name + ' and ' + name;
};

var x = double('Roy');

console.log(x);

// Question 10) A Function

// Question 11) 
  function doSomething(name) {
  return name;
}

console.log(doSomething('Julio'));

// Question 12) 
  function multiplyFive(number) {
  return number*5;
}

console.log(multiplyFive(6));

// Question 13) 
  // function myFunction() {
 // return alert('Hello World!');
//}

//myFunction();

// Question 14) 
var isAnswerRight = true;

console.log(isAnswerRight ? 'The answer is right!' : 'The answer is wrong!');

// Question 15) 
function tellFortune(number, name, location, job) {
  return console.log('You will be a ' + job + ' in ' + location + ', and married to ' + name + ' with ' + number + ' kids.');
}

tellFortune(2, 'Samantha', 'Arizona', 'Blacksmith');
tellFortune(1, 'Jim', 'Dunder Mifflin', 'receptionist');
tellFortune(2, 'Skyler White', 'USA', 'teacher');


// Question 16) Variable hoisting is declaring the variables at the top of the script before they are used.
// Question 17) Not defined variables don't exist in the code. Undefined variables exist, however, 
    // don't have any values assigned to them. Null variables exist and have a 'null' value assigned to them.

// Question 18) 'var' declarations are global scoped, and can be edited and re-declared. Let and const are block scoped, however, let variables
    // can be edited but not re-declared. Const variables cannot be updated and cannot be re-declared.

// Question 19) Function arguments are values that are provided calling a function, then parameters are going to receive those values inside the function.

// Question 20) A function declaration is associated with an identifier and an expression is not, instead, it is associated with and stored inside a variable