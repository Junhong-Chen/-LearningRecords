const Promise = require('./promise.js')

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('start')
//     console.log('ready')
//   })
// })
// .then()
// .then(response => {
//   console.log(response) // start
//   return new Promise(resolve => {
//     resolve('oops')
//   })
// },
// error => {
//   console.log('error1:' + error)
// })
// .then(response => {
//   console.log(response)
// },
// error => {
//   console.log('error2:' + error)
// })

// const promise = new Promise((resolve, reject) => {
//   reject('ojbk')
// })

// const promiseAgain = promise.then(value => {
//   console.log(value)
//   return promiseAgain
// })


// Promise.resolve(promise).then(value => {
//   console.log(value)
// }, reason => {
//   console.log(reason)
// })

const p1 = new Promise(resolve => {
  resolve('success')
})

const p2 = new Promise((resolve, reject) => {
  // resolve('success again')
  reject('fail')
})

Promise.all([p1, p2]).then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})
