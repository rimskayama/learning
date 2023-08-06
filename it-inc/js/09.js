// замыкание, лексическое окружение, рекурсии
// замыкание - способность запомнить внешнее лекс. окружение
// lexical environment  
// 1) globalLE {foo: Function, a: undefined}, hosting

var a = '1' // {foo: Function, a: 1}
const b = '2' // {foo: Function, a: 1, b: 2}
let c = '3' // {foo: Function, a: 1, b: 2, c: 3}

/*
foo() +
bar() -
baz() -
*/

// declaration
function foo() {
    console.log('Hello foo')
}

// expression =
const bar = function() { // {foo: Function, a: 1, b: 2, c: 3, bar: Function} 
    console.log('Hello bar')
}

const baz = () => { // {foo: Function, a: 1, b: 2, c: 3, bar: Function, baz: Function} 
    console.log('Hello baz')
}

/*
bar() +
baz() +
*/


// 2) globalLE {Environment --> null}

let car = 'bmw' // {car: 'bmv'}

const startEngine = ()  => { // {car: 'bmw', startEngine: Function}
    // [[Environment]] --> globalLE, когда записывается в globalLE
    // startEngineLE {}, в момент вызова функции
    const startCar = () => { // StartEngineLE {startCar: Function}
        // Environment --> StartEngineLE {}
        // startCarlE, в момент вызова функции
        console.log(`Start ${car}`)
    }
    startCar()
}

car = 'audi' // {car: 'audi, startEngine: Function}
startEngine() // startEngineLE {} 


// 3) globalLE {Environment --> null}

//let count = 0 // counterLE {counter: 0} (output: от 1 до 6)
const counter = () => { // globalLE {counter: Function}
    // Environment --> globalLE
    // counterLE
    let count = 0 // counterLE {counter: 0}
    return () => {
        // Environment --> counterLE
        //count1LE создается каждый вызов, удаляется
        console.log(++count)
    }
}

const count1 = counter() // globalLE {counter: Function, count1: Function}
count1()
count1()
count1()


/* output:
1
2
3
*/

counter()()
counter()()
counter()()

/* output:
1
1
1
*/

// 4) recursion 
// структура stack
// 2(4) --> 2 * 2(3) -> 2 * 2 * 2(2) -> 2 * 2 * 2 * 2
const pow = (x, n) => {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
        
    }
};
console.log(pow(2, 4));
