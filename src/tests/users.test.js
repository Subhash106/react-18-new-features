import Users from "./users";
import axios from "axios";

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ first: "Subhash", last: "Chandra" }];
  const res = { data: users };
  axios.get.mockResolvedValue(res);

  const myMockFn = jest.fn((cb) => cb(null, true));

  myMockFn((err, val) => console.log("value", val));

  return Users.all().then((data) => expect(data).toEqual(users));
});
