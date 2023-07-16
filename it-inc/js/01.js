// примитивы 
// number, string, boolean, null, undefined, NaN, Infinity, BigInt, Symbol
// объекты
// array, function, object

//1. Сложная структура
//2. Свойства и методы
//3. Ссылочный тип данных

const num = 5

const obj = {} //№123 new Object()
const num_2 = num // (5 & 5)
const obj_2 = obj //№123

obj_2.name = "Alex"
console.log(obj)

const arr0 = [] // new Array()

class Student {
}
const st = new Studen()

const user = {
  name: "Bob",
  age: 22,
  isStudent: false
}

// стал студентом
const copyUser = {
  ...user,
  /*
  name: "Bob",
  age: 22,
  isStudent: false
  */
  isStudent: true
}

const arr = [1,2,3,4,5]
const copyArr = [...arr]

console.log(user === copyUser) // false

function stateChecker (curr, next) {
  if (curr === next) {
    alert('Изменений нет. Страницу не меняем')
  } else 
    alert('Изменения произошли, надо обносить представление')

stateChecker(user, copyUser)

  students = [
    {
      name: 'Bob',
      age: 34
    },
    {
      name: 'Alex',
      age: 32
    },
  ]

/*
CRUD
Create
Read
Update
Delete
*/

students = [
  {
    name: Alex,
    age: 22, 
    address: {
    city: 'Beijing',
      streeet: 'Mao'
    }
  }
]

// add new Student John
const newStudent = {
  name: 'John',
  age: 23,
  address: {
    city: 'Sudan',
    street: 'FIDE'
  }
}

const students_1 = [...students, newStudent]
stateChecker(students, students_1)

// const students_2 = [...students, {...newStudent, address: {newStudent.address, street: "" }]

// change address to John
const students_2 = students_1.map(st => st.name === 'John'
    ? {st..., address: {...st.address, street: ""}}
    : st
  
// change age to John
const students_3 = students_2.map(el => if el.name === "John" {
  return {...st, age: 24}
}
  return el
  
// delete Alex
const students_4 = students_3.filter(el => el.name === 'Alex') // []
stateChecker(students_3, students_4)
