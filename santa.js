const fs = require('fs');

//Q1: what floow does Santa end up on
//'(' => means she go UP 1 floor
//')' => means she go DOWN 1 floor

function question1() {
    //read the target file
    fs.readFile('./santa.txt', (err, data) => {
        //first add a timer to calculate the running time of the code
        console.time('RunTime')
        if (err) {
            console.log('error!')
        }
        //to convert the txt format content into string format
        const directions = data.toString();
        //to split the content and then add them together as an array
        const directionsArray = directions.split('');
        //use an accumulator to do the calculation
        const answer1 = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        //print out the running time and the result
        console.timeEnd('RunTime')
        console.log('floor: ', answer1)
    })
}

question1()

//Q2: when does Santa first enter the basement
//the question can be translated to 
//"when does the accumulator go into negative number (-1)"
function question2() {
    //read the target file
    fs.readFile('./santa.txt', (err, data) => {
        console.time('RunTime')
        if (err) {
            console.log('error!')
        }
        //to convert the txt format content into string format
        const directions = data.toString();
        //to split the content and then add them together as an array
        const directionsArray = directions.split('');
        //create a counter and an accumulator
        let counter = 0
        let accumulator = 0
        const answer2 = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            }
            counter++
            return accumulator < 0
        })
        //print out the result
        console.timeEnd('RunTime')
        console.log('Basemenet enter at ', counter)
    })
}

question2()