const fs = require('fs');

// 1 - What floor does Santa end up on

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const anwser = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log(anwser);
    });
}

//question1();

//2 -Whent does Santa first enter the basement

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
    console.time('santa-time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    let accumulator = 0;
    let counter = 0;
    const anwser = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1;
            } else if (currentItem === ')') {
                accumulator -= 1;
            }
            counter++;
            return accumulator < 0;
        })
        console.timeEnd('santa-time');
        console.log('basement entered at: ', counter);
    })
}

question2();