// Just a Math.random(),
// it requires the [1, 10], random() will give me [0, 1).
// So, it should times 10 and then plus 1

function randomArraySize10() {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(Math.floor(Math.random() * 10 + 1)); // Generate a number belongs to the [1, 10], and push it into an array
    }
    console.log('generated 10 random numbers', result);
    return result;
}


function findFifthLargestElement(nums) {
    let k = 4; // because I use array[0] for comparasion.
    const array = nums.slice(0); // clone to avoid mess up the original array
    array.sort((a, b) => b - a); // sort high to low
    let index = 0;
    let i = 0;
    for (i; i < array.length && k > 0; i++) { // avoid passing whole array to reduce the searching time.
        if (array[i] !== array[index]) {
            k--;
            index = i;
        }
    }
    return array[index];
}

function getIndicesOfLargestValues() {
    let array = randomArraySize10();
    const fifth = findFifthLargestElement(array);
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= fifth) {
            result.push(i);
        }
    }
    console.log('Get the indices of largest values', result);
    return result;
}

// Problems: 
// 1. JS does not have the type 'int'
// 2. the callback function of setTimeout should be the async function. Because we call the async tasks sequentially.
// 3. Depend on which JS version, if it is the es6, we use i to make sure the i could be a scoped variable. That makes the value of i be set into the async function each time. If we use var to declare the i, the task id will be 10.
// 4. The for loop will instantly set 10 setTimeout. And everyone will execute after 1 second. So the tasks will be call at same time

function identifyError() {
    let time = 0; // set base time
    for (let i = 0; i < 10; i++) { // Replace the 'int' to 'let'
        time += 1000; // set the start running time
        setTimeout(function() { // setTimeout cannot make sure the callback runs at the timestamp. It is not precise.
            // Running some asynchronous tasks here
            // ...
            console.log('completed task id: ', i, ' time: ', Date.now()); // I added the Date.now() to show the time when callback is running. 
        }, time);
    }
}

getIndicesOfLargestValues();
identifyError();
