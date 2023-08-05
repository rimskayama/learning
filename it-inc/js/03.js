//1. Реализуйте функцию, которая принимает в качестве параметра массив чисел и возвращает самое большое значение из массива (максимум массива)

const getTheBiggestNumber = (arr) => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            max = arr[i]
        }
    } return max
}
console.log(getTheBiggestNumber([1,22,3,4,5])) // [1,22,3,4,5] => 22

//2. Реализуйте функцию, которая принимает в качестве параметра массив с вложенными в него массивами из чисел и возвращает
//массив, состоящий из максимальных значений каждого вложенного массива.
// [[1,2,3], [4,5,6]] => [3,6]

const biggestNumberOfArray = (arr) => {
    let max = 0
    let biggestNumbers = []
    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i]
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] < arr1[j+1]) {
                max = arr1[j+1]
            }
        } biggestNumbers.push(max)
    } return biggestNumbers
}

console.log(biggestNumberOfArray([[1,2,3], [4,5,6]]))

//3. Реализуйте функцию, которая принимает в качестве параметра массив значений и возвращает новый массив, очищенный от значений,
// которые могут быть интерпретированы как false

const getRidOfFalse = (arr) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            arr2.push(arr[i])
        }
    } return arr2
} 

console.log(getRidOfFalse([1,2,3,4, false, 5,6])) // [1,2,3,4, false, 5,6] => [1,2,3,4,5,6]

    //4. Реализуйте функцию, которая принимае в качестве параметра массив произвольных элементов и переменную, которая содержит произвольное значение.
    // Если это значение содержится в массиве, функция должна возвращать индекс первого вхождения значения в массив, если не содержится - произвольное отрицательное число.

const getNumberIfItsInArray = (arr, num) => {
    for (let i = 1; i < arr.length; i++) {
        if (num === arr[i]) return i
    }
    return -1
}

    console.log(getNumberIfItsInArray([1,2,3,4,5,5], 5)) // ([1,2,3,4,5,5], 5) => 4
    console.log(getNumberIfItsInArray([1,2,3,4,5,5], 10)) // ([1,2,3,4,5,5], 10) => -1

//5. Реализуйте функцию, которая возвращает массив,  в котором элементы исходного массива разбиты на вложенные массивы указанной длинны
// ([1,2,3,4,5,6], 3) => [[1,2,3], [4,5,6]]

    const splitArray1 = (arr, num) => {
        let res = []
        let shortArr = []
        let counter = 0
        const selfMadePush = (array, ...els) => {
            for (let i = 0; i < els.length; i++) {
                array[array.length] = els[i]
            }
        }
        
        if (arr.length < num) {
            return arr
        } else if (arr.length > num) {
            for (let i = 0; i < arr.length + 1; i++) {
                if (counter > 0 & counter % num === 0) {
                    selfMadePush(res,shortArr)
                    shortArr = []
            } else res = res
            counter++
            selfMadePush(shortArr,arr[i])
            } //return res
        } else for (let i = 0; i < arr.length; i++) {
            selfMadePush(shortArr,arr[i])
            selfMadePush(res,shortArr)
            shortArr = []
        }
        return res
    }   
    

        console.log(splitArray1([1,2,3,4,5,6], 3))
        console.log(splitArray1([1,2,3,4],4))
        console.log(splitArray1([1,2,3,4],5))



        const splitArray2 = (arr, num) => {

            const selfMadePush = (array, ...els) => {
                for (let i = 0; i < els.length; i++) {
                    array[array.length] = els[i]
                }
            }
    
            let shortArr = []
            let res = []
            let counter = 0 
            if (arr.length < num) {
                return arr
            } else if (arr.length > num) {
                for (let i = 0; i < arr.length; i += num) {
                    counter++ 
                    for (let j = i; j < num * counter; j++) {
                    selfMadePush(shortArr, arr[j])
                    }
                    selfMadePush(res, shortArr)
                    shortArr = []
                    }
                return res
            } else for (let i = 0; i < arr.length; i++) {
                    selfMadePush(shortArr, arr[i])
                    selfMadePush(res, shortArr)
                    shortArr = []
            } return res
        }
    
    
        console.log(splitArray2([1,2,3,4,5,6], 3))
        console.log(splitArray2([1,2,3,4],4))
        console.log(splitArray2([1,2,3,4],5))

    // with methods of arr

    function splitArrayWithSlice(arr, num) {
        const res = [];
        let shortArr = [];
        if (arr.length != num) {
            for (let i = 0; i < arr.length; i += num) {
                const shortArr = arr.slice(i, i + num);
                res.push(shortArr);
            } 
        } else for (let i = 0; i < arr.length; i++) {
            shortArr.push(arr[i])
            res.push(shortArr);
            shortArr = []
        } return res
    }   
    
    console.log(splitArrayWithSlice([1,2,3,4,5,6], 3))
    console.log(splitArrayWithSlice([1,2,3,4],4))
    console.log(splitArrayWithSlice([1,2,3,4],5))


//6. Реализуйте функцию, которая принимае в качестве параметра массив чисел и количество максимальных элементов.
// Возвращает массив, сосотоящий из указанного количества максимальных элементов
// ([1,22,3,4,5], 2) => [22, 5]
// NB!!! При решении использовать только цикл, не использовать методы массивов и функцию Math.max()


    const getMaxElements = (arr, num) => {
        let arrOfMaxElements = [] 
        
        //seflMadeSort
        
          for (let i = 0; i < arr.length; i++) {
              for (let j = i; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                  let t = arr[i]
                  arr[i] = arr[j]
                  arr[j] = t
                }
              }
          }
        // new arr
          for (let i = 0; i < num; i++) {
            arrOfMaxElements[i] = arr[i]
        } return arrOfMaxElements
    }

        
        console.log(getMaxElements([1,22,3,4,5], 2))
