//1. Async/await
//a. Call back
// function test() {
//     asyncTask(function() {
//         console.log(`call this ....`)
//     })
// }

// test()

// function asyncTask(callback) {
//     setTimeout(function() {
//         console.log(`Task end!`)
//     }, 1000)
// }
//b. Promise
// function test() {
//     asyncTask()
//         .then(function() {
//             console.log(`Task end`)
//         })
// }

// test()

// function asyncTask() {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, 2000)
//     })
// }
//c.Async/await
// async function test() {
//     await asyncTask()
//     console.log(`Task 1 end`)
//     await asyncTask()
//     console.log(`Task 2 end`)
// }
// test()

// function asyncTask() {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, 2000)
//     })
// }
//2.Try/catch/throw/Error
// function test() {
//     let i = -10
//     try {
//         console.log(1)
//         console.log(2)
//         if (i < -0) {
//             let error = new Error(`Number i must greater than 0`)
//             throw error
//         }
//         console.log(3)
//         console.log(4)
//     } catch (err) {
//         console.warn(err)
//         console.log(5)
//         console.log(6)


//     }
// }
// test()