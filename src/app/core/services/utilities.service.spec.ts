import { UtilitiesService } from './utilities.service';

describe('UtilitiesService', () => {
  it('should add two numbers, sum(num1: number, num2: number)', () => {
    const mockedData = { num1: 1, num2: 2 };
    const expectedResult = 3;
    const result = UtilitiesService.sum(mockedData.num1, mockedData.num2);
    expect(result).toEqual(expectedResult);
  })
});
