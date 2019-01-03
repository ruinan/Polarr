const FindKthLargest = require('./findkthLargestElement');

// Just a Math.random(), 
// it requires the [1, 10], random() will give me [0, 1). 
// So, it should times 10 and then plus 1

function randomArraySize10 () {
    const result = [];
    for (let i = 0; i < 10; i++) {
        result.push(Math.floor(Math.random() * 10 + 1));
    }
    return result;
}

// There are two ways to find the 5th largest element in the array. 


function getIndicesOfLargestValues () {
    let array = randomArraySize10();
    const result = [];
    const fifth = FindKthLargest.findKthLargest2(array.slice(0), 5);
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= fifth) {
            result.push(i);
        }
    }
    return result;
}

// 1. JS does not have the type 'int'
// 2. the callback function of setTimeout should be the async function. Because we call the async tasks sequentially.
// 3. Depend on which JS version, if it is the es6, we use i to make sure the i could be a scoped variable. That makes the value of i be set into the async function each time. If we use var to declare the i, the task id will be 10.
function identifyError () {
    for (let i = 0; i < 10; i++){
        setTimeout(async function(){
            // Running some asynchronous tasks here
            // ...
            console.log("completed task id " + i);
        }, 1000)
    }
}

getIndicesOfLargestValues();
identifyError();