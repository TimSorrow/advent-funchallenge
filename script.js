const { count } = require('console');
const fs = require('fs');

fs.readFile('./santa.txt', (err, data) => {
    console.time('funchallenge');
    if(err) {
        console.log('errrrrrrooorrr');
    }
    let count = 0;
    for(let i = 0; i< data.length; i++){
        if(data.toString().charAt(i) == '('){
            count++;
        }
        else if(data.toString().charAt(i) == ')') {
            count--;
        }
    }
    console.log(count);
    console.timeEnd('funchallenge');
})