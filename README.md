# backendtest

This is a javascript code to find the minimum number of swaps required to sort the array of intergers in ascending order.

I used a selection sort technique.

I first created a function(minimumSwaps) that accepts an array as a parameter(arr). 
Then I intialized a counter to count how many times the swap has occured. 
Then I looped through the array lenght, reducing i everytime I loop through.
I created a variable called minval to hold the minimum value from the array, then used the spread syntax to open up the array and pick out the minimum value with Math.min function.
I created a variable called minIndex to hold the position of the minval in the array.
Then I ran a check to see if the lowest value is not already the first item in the array, if it isn't I swapped it with the first item in the array, then used the splice method to remove it from the array and increased the minimum swap required counter by 1. If it is, I just removed the item from the array.
Then I returned the counter.
