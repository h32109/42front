import axios from "axios";
import {
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
} from "./mocks/userService";

// jest.mock("./mocks/userService");
jest.mock("axios");

const userMario = {
  uid: 1,
  nickname: "Mario",
  age: 29,
};

test("get a user test", async () => {
  axios.get.mockResolvedValue({
    data: {
      uid: 1,
      nickname: "Mario",
      age: 30,
    },
  });

  const user = await getUser(1);

  expect(user).toHaveProperty("uid", 1);
  expect(user).toHaveProperty("nickname", "Mario");
  expect(user).toHaveProperty("age", 30);
  expect(axios.get).toBeCalledTimes(1);
  expect(axios.get).toBeCalledWith(
    "https://jsonplaceholder.typicode.com/users/1",
  );
});

test("create a user test", () => {
  createNewUser.mockResolvedValue("New user Mario is successfully created.");

  return createNewUser(userMario).then(res => {
    expect(res).toBe("New user Mario is successfully created.");
  });
});

test("update a user", () => {
  updateUser.mockResolvedValue(`User-${userMario.uid} has been updated.`);

  return updateUser(userMario).then(res => {
    expect(res).toBe("User-1 has been updated.");
  });
});

test("delete a user", () => {
  deleteUser.mockResolvedValue(`User-${userMario.uid} has been deleted.`);

  return deleteUser(userMario).then(res => {
    expect(res).toBe("User-1 has been deleted.");
  });
});
