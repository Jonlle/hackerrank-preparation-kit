import { plusMinus } from '../../src/basic/plus-minus/solution';

describe('plusMinus function tests', () => {
  // Test Case 1
  it('should correctly calculate the proportions for input [-4, 3, -9, 0, 4, 1]', () => {
    const input = [-4, 3, -9, 0, 4, 1];
    const expectedOutput = ['0.500000', '0.333333', '0.166667'];

    console.log = jest.fn();

    plusMinus(input);

    expectedOutput.forEach((output, index) => {
      expect(console.log).toHaveBeenNthCalledWith(index + 1, output);
    });
  });

  // Test Case 2
  it('should correctly calculate the proportions for input [1, 2, 3, -1, -2, -3, 0, 0]', () => {
    const input = [1, 2, 3, -1, -2, -3, 0, 0];
    const expectedOutput = ['0.375000', '0.375000', '0.250000'];

    console.log = jest.fn();

    plusMinus(input);

    expectedOutput.forEach((output, index) => {
      expect(console.log).toHaveBeenNthCalledWith(index + 1, output);
    });
  });

  // Test Case 3
  it('should correctly calculate the proportions for input [0, 0, -1, 1, 1]', () => {
    const input = [0, 0, -1, 1, 1];
    const expectedOutput = ['0.400000', '0.200000', '0.400000'];

    console.log = jest.fn();

    plusMinus(input);

    expectedOutput.forEach((output, index) => {
      expect(console.log).toHaveBeenNthCalledWith(index + 1, output);
    });
  });

  // Test Case 4
  it('should correctly calculate the proportions for input [55, 48, 48, 45, 91, 97, 45, 1, 39, 54, 36, 6, 19, 35, 66, 36, 72, 93, 38, 21, 65, 70, 36, 63, 39, 76, 82, 26, 67, 29, 24, 82, 62, 53, 1, 50, 47, 65, 67, 19, 66, 90, 77]', () => {
    const input = [
      55, 48, 48, 45, 91, 97, 45, 1, 39, 54, 36, 6, 19, 35, 66, 36, 72, 93, 38, 21, 65, 70, 36, 63, 39, 76, 82, 26, 67,
      29, 24, 82, 62, 53, 1, 50, 47, 65, 67, 19, 66, 90, 77,
    ];
    const expectedOutput = ['1.000000', '0.000000', '0.000000'];

    console.log = jest.fn();

    plusMinus(input);

    expectedOutput.forEach((output, index) => {
      expect(console.log).toHaveBeenNthCalledWith(index + 1, output);
    });
  });
});
