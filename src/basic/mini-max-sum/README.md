# Mini-Max Sum

## Description

Calculates the minimum and maximum sums of exactly four out of five integers in a given array. The function **`miniMaxSum`** takes an array of five integers as input and prints two space-separated integers: the minimum sum and the maximum sum.

## Function Signature

```typescript
function miniMaxSum(arr: number[]): void;
```

## Input

- `arr`: An array of exactly 5 integers, where `1 <= arr[i] <= 10^9`.

## Output

The function prints two space-separated integers:

1. **Minimum sum**: The sum of the smallest four integers in the array.
2. **Maximum sum**: The sum of the largest four integers in the array.

## Example

**Input:**

```text
1 2 3 4 5
```

**Output:**

```text
10 14
```

## Explanation

For the input array `[1, 2, 3, 4, 5]`:

- The minimum sum is \( 1 + 2 + 3 + 4 = 10 \) (excluding the largest element, `5`).
- The maximum sum is \( 2 + 3 + 4 + 5 = 14 \) (excluding the smallest element, `1`).

These values are printed as `10 14`.

## Solution

The function iterates through the array, calculating the total sum while simultaneously identifying the smallest and largest integers. It then calculates the minimum sum by excluding the largest integer and the maximum sum by excluding the smallest integer.

The solution code can be found in the `solution.ts` file.

## Tests

Unit tests specific to this problem are included in the `tests/basic/mini-max-sum.test.ts` file.

To run the tests for this challenge only:

```bash
npm test mini-max-sum
```

For more details on running tests and setting up the environment, refer to the [main README](../../../README.md).

## Notes

- **Time Complexity:** \( O(5) = O(1) \), as the array size is fixed at 5.
- **Space Complexity:** \( O(1) \) (constant additional space usage).
- **Required Knowledge:** Basic understanding of arrays and summation techniques.

## Additional Resources

- **Problem Statement:** [HackerRank](https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem).
- **Editorial:** Official editorial with tips, statistics, and solutions in other programming languages [here](https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/editorial).
