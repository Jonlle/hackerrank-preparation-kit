export function miniMaxSum(arr: number[]): void {
  let minNum = Number.MAX_SAFE_INTEGER;
  let maxNum = 1;
  let totalSum = 0;

  arr.forEach((num) => {
    totalSum += num;
    if (num < minNum) {
      minNum = num;
    }
    if (num > maxNum) {
      maxNum = num;
    }
  });

  console.log(`${totalSum - maxNum} ${totalSum - minNum}`);
}
