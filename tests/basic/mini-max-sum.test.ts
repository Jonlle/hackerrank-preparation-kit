import { miniMaxSum } from '../../src/basic/mini-max-sum/solution';

describe('Mini-Max Sum', () => {
  it('should correctly calculate the minimum and maximum sums for input [1, 2, 3, 4, 5]', () => {
    console.log = jest.fn();
    miniMaxSum([1, 2, 3, 4, 5]);
    expect(console.log).toHaveBeenCalledWith('10 14');
  });

  it('should correctly calculate for sample input [7, 69, 2, 221, 8974]', () => {
    console.log = jest.fn();
    miniMaxSum([7, 69, 2, 221, 8974]);
    expect(console.log).toHaveBeenCalledWith('299 9271');
  });

  it('should handle large numbers', () => {
    console.log = jest.fn();
    miniMaxSum([256741038, 623958417, 467905213, 714532089, 938071625]);
    expect(console.log).toHaveBeenCalledWith('2063136757 2744467344');
  });

  it('should handle repeated numbers', () => {
    console.log = jest.fn();
    miniMaxSum([5, 5, 5, 5, 5]);
    expect(console.log).toHaveBeenCalledWith('20 20');
  });

  it('should handle another large dataset', () => {
    console.log = jest.fn();
    miniMaxSum([396285104, 573261094, 759641832, 819230764, 364801279]);
    expect(console.log).toHaveBeenCalledWith('2093989309 2548418794');
  });
});
