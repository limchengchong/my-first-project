/**
 * Array Sorting Functions
 */

/**
 * Sorts an array of numbers in ascending order
 * @param {number[]} arr - The array to sort
 * @returns {number[]} - The sorted array
 */
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

/**
 * Sorts an array of numbers in descending order
 * @param {number[]} arr - The array to sort
 * @returns {number[]} - The sorted array
 */
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

/**
 * Sorts an array of strings alphabetically
 * @param {string[]} arr - The array to sort
 * @returns {string[]} - The sorted array
 */
function sortAlphabetically(arr) {
  return arr.sort();
}

/**
 * Sorts an array of objects by a specific property
 * @param {Object[]} arr - The array of objects to sort
 * @param {string} property - The property name to sort by
 * @param {string} order - 'asc' for ascending, 'desc' for descending
 * @returns {Object[]} - The sorted array
 */
function sortByProperty(arr, property, order = 'asc') {
  return arr.sort((a, b) => {
    if (order === 'asc') {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  });
}

// Example usage
const numbers = [5, 2, 8, 1, 9];
console.log('Ascending:', sortAscending([...numbers]));
console.log('Descending:', sortDescending([...numbers]));

const words = ['banana', 'apple', 'cherry'];
console.log('Alphabetically:', sortAlphabetically([...words]));

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];
console.log('By age:', sortByProperty([...people], 'age', 'asc'));

// Export functions for use in other modules
module.exports = {
  sortAscending,
  sortDescending,
  sortAlphabetically,
  sortByProperty
};
