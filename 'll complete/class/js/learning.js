// 1. type
console.log(typeof 1) // 'number'
console.log(typeof 'abc') // 'string'
console.log(typeof true) // 'boolean'
console.log(typeof { message: 'hello' }) // 'object'

let a = 1
console.log(typeof a == 'number') // true
// 2. boolean (true/false)
// false ~ null, '', 0, false, undefined, NaN
// true ~ else

// 3. string
// ''   ""    ``

// .length
// .toUpperCase() | .toLowerCase() | .trim()
// .split() | .substring()
// .includes() | .startsWith() | .endsWith()

// 4. number
// parseInt() | parseFloat()
// Math














// 1. async / await, asynchronous ~ bất đồng bộ, synchronous ~ đồng bộ
// async function test() {
//   await asyncTask()
//   console.log('task 1 end!')
//   await asyncTask()
//   console.log('task 2 end!')
// }

// test()

// /**
//  * async >> không biết khi nào hàm kết thúc
//  */
// function asyncTask() {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, 2000)
//   })
// }

// 2. try / catch / throw / Error
// function test() {
//   let i = 10
//   try {
//     console.log(1)
//     console.log(2)
//     if(i < 0) {
//       console.log(3)
//       let error = new Error('Number i must greater than 0!')
//       throw error
//     }
//     console.log('Success!')
//   } catch(err) {
//     console.warn(err)
//     console.log('Error!')
//   }
// }

// test()


