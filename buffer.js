const fs = require('fs');

let num = 1;
function asyncHandle () {
    return new Promise((resolve, _reject) => {
        setInterval(() => {
            num++;
            resolve(num);
            console.log(num)
        }, 3000);
    })
};
asyncHandle().then(num => console.log("thenable" + num));