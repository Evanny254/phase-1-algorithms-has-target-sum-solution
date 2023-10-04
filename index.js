function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNumbers = new Set();
  for (const num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    } else {
      seenNumbers.add(num);
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n) - Linear time complexity due to iterating through the array once.
*/

/* 
  Add your pseudocode here
  - Create an empty set called seenNumbers
  - Iterate through each element in the array
    - Calculate the complement by subtracting the current element from the target
    - Check if the complement is in the set of seen numbers
    - If found, return true (a pair with the target sum exists)
    - If not found, add the current element to the set of seen numbers
  - If no such pair is found, return false
*/

/*
  Add written explanation of your solution here
  This function uses a set to keep track of numbers that have been seen while iterating through the array. 
  For each element in the array, it calculates the complement (the value needed to achieve the target sum) 
  and checks if this complement is in the set of seen numbers. If found, it means a pair with the target sum exists, 
  and it returns true. If not found, it adds the current element to the set of seen numbers. If no such pair is found after 
  iterating through all elements, it returns false, indicating that the target sum is not possible with the given array elements.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
