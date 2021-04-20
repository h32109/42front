import { getAUser, createNewUser } from './mocks/userService';

jest.mock('./mocks/userService');

const user = {
  uid: 1,
    nickname: 'Mario',
    age: 29
}

beforeEach(() => {
  user = {
    uid: 1,
    nickname: 'Mario',
    age: 29
  }
})

test('get a user test', () => {
  return getAUser().then(user => {
    expect(user).toHaveProperty('uid');
    expect(user).toHaveProperty('nickname');
    expect(user).toHaveProperty('age');
  });
});

test('create a user test', () => {
  return createNewUser(user)
})