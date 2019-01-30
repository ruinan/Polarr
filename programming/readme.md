# The JS program

## Dependencies

The only dependency is the Heap.

## How to run it

Under the folder in the terminal, run `npm start`. The result will show in the terminal console.

## Description

JS provides the Math object with a function named random() that provides a random value in [0, 1).

Times the random value with 10 and parse to Integer, then plus 1, we get a random number in [1, 10],

Repeat 10 times, we got an array with 10 random intergers.


For getting the fifth ranked element indices, I need to consider the tie. It means the sorting is not a good solution that will break the index for each element in the original array. So, I thought I should find a way to find the 'Fifth Largest' element in the array. 

Basically, I sorted a copy of array and pass from high to low to find the fifth largest element. The sort time complexity is O(nlogn), the find fifth time complexity is O(n). Meanwhile, we can use the Max Heap to do the same thing.

Then I got the fifth largest element. Pass the whole array again, I got the array with the indices that represents the element which is larger or equal to the fifth element. And it hold the sequence of the indices.

For the last one, it looks like to test the knowledge about the scope in JS. And the setTimeout in the JS. The first solution is to use let to replace the var. The i should change each time with i. Or it will always be 10. Second, the setTimeout will makes the all the callbacks run after 1 second. Because the for loop will excute instantly. It will send 10 setTimeout 