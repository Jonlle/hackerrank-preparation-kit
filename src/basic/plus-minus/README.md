# Plus Minus

### Description

Calculates the frequency of positive, negative, and zero numbers in a given array, then divides each frequency by the size of the array (n). The **`plusMinus`** function takes an array of integers as input and prints the proportions of positive, negative, and zero values, formatted to 6 decimal places.

### Function Signature

```typescript
function plusMinus(arr: number[]): void;
```

### Input:

- arr: An array of integers, where arr.length = n (1 ≤ n ≤ 100).

### Output:

The function prints three lines:

1. Proportion of positive values (to 6 decimal places).
2. Proportion of negative values (to 6 decimal places).
3. Proportion of zero values (to 6 decimal places).

### Example

**Input:**

```
-4 3 -9 0 4 1
```

**Output:**

```
0.500000
0.333333
0.166667
```

### Explanation:

For the input array `[-4, 3, -9, 0, 4, 1]`, there are:

- 3 positive numbers (`3, 4, 1`)
- 2 negative numbers (`-4, -9`)
- 1 zero (`0`)

Thus, the proportions are:

- Positive: 3/6 = 0.500000
- Negative: 2/6 = 0.333333
- Zero: 1/6 = 0.166667

These values are printed to the console, each on a separate line with 6 decimal places.

## Solution

The function `plusMinus` takes an array of integers as input and calculates the proportions of positive, negative, and zero values. It uses counters that iterate through the array and calculate the respective fractions. Finally, it prints the results formatted to 6 decimal places.

The solution code can be found in the `solution.ts` file.

## Tests

Tests are included in the `tests/basic/plus-minus.test.ts` file. You can run all the tests using Jest, or specify an individual test file.

To run all tests:

```bash
npm test
```

To run a specific test:

```bash
npm test plus-minus
```

## Notes

- **Time Complexity:** O(N), where N is the number of elements in the array.
- **Required Knowledge:** Arrays and floating-point numbers.

## Additional Resources

- Problem statement in [HackerRank](https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem).
- Editorial: statistics and featured solutions in other languages [here](https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/editorial).
