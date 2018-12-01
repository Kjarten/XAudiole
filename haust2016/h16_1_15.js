// What is logged when the following JavaScript code is run?

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
  return value * value;
});
const results = [];

for (let i = values.length - 1; i>=0; i--) {
  const value = values[i];
  results.push(value);
}
console.log(results.join(', '));
