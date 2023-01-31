# basics

`result = prompt(title, [default]);` <sub>// [] facultative</sub> 

**'0'  =  ' '**
```
alert( Boolean("0") ); // true

alert( Boolean(" ") ); // true
```

**number() ===**
  
```
alert( +true ); // 1
  
alert( +"" );   // 0
```
  
**increment**

***before:***
```

let counter = 1;

let a = ++counter;

alert(a); // 2
```

***after:***
```

let counter = 1;

let a = counter++;

alert(a); // 1
```

> "" + 1 + 0 = "10" // "1" + "0"

> "" - 1 + 0 = -1 // "" = 0 => 0 + -1 + 0

> true + false = 1

> 6 / "3" = 2

> "2" * "3" = 6 // - * / only numbers

> 4 + 5 + "px" = "9px"

> "$" + 4 + 5 = "$45"

> "4" - 2 = 2

> "4px" - 2 = NaN

> "  -9  " + 5 = "  -9  5" 

> "  -9  " - 5 = -14 // "  -9  " = -9

> null + 1 = 1 // null = 0

> undefined + 1 = NaN 

>" \t \n" - 2 = -2 // " \t \n" = ""

***falsy = 0, "", null, undefined и NaN***

***truthy = others***

**||**
```

let currentUser = null;

let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

alert( name ); // "John"
```

**&& returns the first false value, while || returns the first true value**

`a && b || c && d  = (a && b) || (c && d)`


```
let x = 1;

(x > 0) && alert( 'Greater than zero!' );
```

**===**

```
let x = 1;

if (x > 0) {

  alert( 'Greater than zero!' );
  
}
```

***while (i) = while (i != 0)***

**spread**

```
const arr = [6, 89, 3, 45];

const maximus = Math.max(...arr);
```
**Function Declaration**
```
function sum(a, b) {
  return a + b;
}
```
**Function Expression**
```
let sum = function(a, b) {
  return a + b;
};
```
**arrow functions**

`let double = n => n * 2;`

<sub>// let double = function(n) { return n * 2 }</sub>

**if in obj**
```
let user = { name: "John", age: 30 };

alert( "age" in user ); // true
alert( "blabla" in user ); // false
```
for (let key in obj)

Object.assign
```
let user = {
  name: "John",
  age: 30
};
let clone = Object.assign({}, user);
```
<sub> _.cloneDeep(obj)</sub>
 
<sub>structuredClone()</sub>

**this**
```
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" = user
    alert(this.name);
  }

};

user.sayHi(); // John
```
# number 
let billion = 1e9;

1e3 = 1 * 1000

1.23e6 = 1.23 * 1000000

1e-3 = 1 / 1000 (=0.001)

1.23e-6 = 1.23 / 1000000 (=0.00000123)

`alert( 123456..toString(base) );`

>Math.floor 3.1 => 3

>Math.ceil 3.1 => 4

>Math.round  3.1 => 3, 3.6 => 4

>Math.trunc without 3.1 => 3, 3.6 => 3
```
let num = 12.36;

alert( num.toFixed(1) ); // "12.4"
```

isNaN(value)

isFinite(value)

Object.is(NaN, NaN) === true

**parseInt(str, radix)**

```
alert( parseInt('100px') ); // 100

alert( parseFloat('12.5em') ); // 12.5
```
```
alert( Math.max(3, 5, -10, 0, 1) ); // 5

alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) ); // 2 ** 10 = 1024
```
# str

**backticks** ES6 **template literal**
```
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```
```
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
```

|  symbol   |     description   |
| ----------| ------------------|
| \n        | newline character |
| \\', \\"  | quotes            |
| \\\       | the backslash     |
| \t        | tab               |

ES6 **destructuring assignment**
```
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

/* 
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
*/

const {today : highToday, tomorrow : highTomorrow} = HIGH_TEMPERATURES;
```
```
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today : { low : lowToday, high : highToday}} = LOCAL_FORECAST;

/*
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;
*/
```

```
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```
```
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  min: -0.75,
};

const half = ({ max, min }) => (max + min) / 2.0;
```
ES6 **object property shorthand**
```
function makeUser(name, age) {
  return {
    name, // instead name: name
    age   // age: age
    // ...
  };
}
```
**regex**
```
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
```
**ignore case /i**
```
let myString = "Free";
let fccRegex = /free/i; 
let result = fccRegex.test(myString);
```
***'string'.match(/regex/);
/regex/.test('string');***

**global search flag /g**

**wildcard character .**
hug, huh, hut, and hum => use the regex /hu./

**Character classes**
```
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex); 
```

**character/number sets [a-z] the hyphen (-)**
```
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); 
```
caret character (^) to create a negated character set

outside of a character set, the caret is used to search for patterns at the beginning of strings

search for patterns at the end of strings /smth$/

check if character appears one or more times in a row /a+/ig

check if character appears or not (null) /A*/

```
lazy matching <h1> /<.*?i>/

search for all letters of the alphabet, numbers, _.  /\w/ (in str); 

/\W/ digits or numbers
  
/\d/ opposite of alphanumerics
  
/\D/ non-digits

\s whitespace

\S non-whitespace using 

quantity specifiers {3,6}

```
?
```
let favWord = "favorite";

let favRegex = /favou?rite/i; 

let result = favRegex.test(favWord);
```
Basic Data Structures

splice()
```
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); \\[ 10, 11, 12, 13, 14, 15 ]
```

indexOf()
```
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); \\-1
fruits.indexOf('pears')\\ 1
```
```
function quickCheck(arr, elem) {
  return (arr.indexOf(elem) >= 0) ? true : false;
}
```
