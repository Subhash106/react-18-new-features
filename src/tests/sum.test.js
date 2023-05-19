import { sum } from "./sum";

import forEach from "./forEach";

test("add 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("test forEach", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([1, 2], mockCallback);

  const myMock1 = jest.fn();
  const a = new myMock1();

  myMock1
    .mockReturnValueOnce(10)
    .mockReturnValueOnce("x")
    .mockReturnValueOnce(true)
    .mockReturnValueOnce({ test: "hello" });

  console.log(myMock1.mock.instances);
  console.log(myMock1());
  console.log(myMock1());
  console.log(myMock1());
  console.log(myMock1());
  console.log(myMock1());

  console.log(mockCallback.mock);

  expect(mockCallback.mock.calls).toHaveLength(2);
});
