import axios from "axios";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./mocks/userService";

jest.mock("axios");

beforeEach(() => {
  axios.mockClear();
});

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

test("create a user test", async () => {
  axios.post.mockResolvedValue({
    data: "New user Luigi is successfully created.",
  });

  const result = await createUser({
    uid: 2,
    nickname: "Luigi",
    age: 28,
  });

  expect(result).toBe("New user Luigi is successfully created.");
  expect(axios.post).toBeCalledTimes(1);
  expect(axios.post).toBeCalledWith(
    "https://jsonplaceholder.typicode.com/users",
    {
      age: 28,
      nickname: "Luigi",
      uid: 2,
    },
  );
});

test("update a user", async () => {
  axios.put.mockResolvedValue({
    data: "User mario is successfully updated.",
  });

  const result = await updateUser({
    uid: 1,
    nickname: "NewMario",
    age: 31,
  });

  expect(result).toBe("User mario is successfully updated.");
  expect(axios.put).toBeCalledTimes(1);
  expect(axios.put).toBeCalledWith(
    "https://jsonplaceholder.typicode.com/users",
    {
      uid: 1,
      nickname: "NewMario",
      age: 31,
    },
  );
});

test("delete a user", async () => {
  axios.delete.mockResolvedValue({
    data: "User mario is successfully deleted.",
  });

  const result = await deleteUser(1);

  expect(result).toBe("User mario is successfully deleted.");
  expect(axios.delete).toBeCalledTimes(1);
  expect(axios.delete).toBeCalledWith(
    "https://jsonplaceholder.typicode.com/users/1",
  );
});
