export function plusMinus(arr: number[]): void {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach((num) => {
    if (num > 0) {
      positives++;
    } else if (num < 0) {
      negatives++;
    } else {
      zeros++;
    }
  });

  positives = positives / arr.length;
  negatives = negatives / arr.length;
  zeros = zeros / arr.length;

  console.log(positives.toFixed(6));
  console.log(negatives.toFixed(6));
  console.log(zeros.toFixed(6));
}
