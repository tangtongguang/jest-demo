import { add, mul } from '../calc';

describe('test add function', () => {
  it('should return 15 for add(10,5)', () => {
    expect(add(10, 5)).toBe(15);
  });
});

describe('test mul function', () => {
  it('should return 15 for mul(3,5)', () => {
    expect(mul(3, 5)).toBe(15);
  });
});
