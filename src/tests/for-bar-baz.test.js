import defaultExport, { foo, bar } from "./for-bar-baz";

jest.mock("./for-bar-baz", () => {
  const originalModule = jest.requireActual("./for-bar-baz");

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked baz"),
    foo: "mocked foo",
  };
});

test("should test partial mock", () => {
  const defaultExportResult = defaultExport();

  expect(defaultExportResult).toBe("mocked baz");
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe("mocked foo");

  expect(bar()).toBe("bar");
});
