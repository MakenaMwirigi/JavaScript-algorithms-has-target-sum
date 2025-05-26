function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Time complexity: O(n), where n is the length of the array.
  Space complexity: O(n) for the set storing seen numbers.
*/

/*
  Explanation:
  We're trying to find if two numbers in the array add up to the target.
  Instead of comparing every pair (which would be O(n^2)), we use a set
  to store numbers we've seen so far and check for the complement.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  // Additional tests
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10], 10));
}

module.exports = hasTargetSum;
