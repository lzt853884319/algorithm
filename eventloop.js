const fs = require('fs');
console.log('start');
setTimeout(() => {
    console.log("setTimeout");
    process.nextTick(() => {
        console.log("tick setTimeout")
    });
    Promise.resolve().then(() => {console.log("promise2 setTimeout");
    });
}, 0);
Promise.resolve().then(() => {
    console.log("promise1");
    // process.nextTick(() => {
    //     console.log("tick 2")
    // })
}).then(() => {console.log("promise2");
});
// process.nextTick(() => {
//     console.log("tick")
// });
setImmediate(() => {
    console.log("immediate");
});
fs.readFile('', () => {
    console.log("readFile cbk")
    setTimeout(() => {console.log("readFile setTimeout")});
    setImmediate(() => {console.log("readFile immediate")});
})
console.log('end');

// console.log('start');
// setTimeout(() => {
//     console.log("setTimeout");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("promise1");
// }).then(() => {console.log("promise2")});
// setImmediate(() => {
//     console.log("immediate");
//     Promise.resolve().then(() => {console.log("promise2 setTimeout");});
// });
// console.log('end')
setTimeout(()=>{
    console.log('timer1')
    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)
setTimeout(()=>{
    console.log('timer2')
    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)
