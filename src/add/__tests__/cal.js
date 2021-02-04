import { add } from "../cal";

test('add 1+1= 2',() => {
  expect(add(1,2)).toBe(3);
});