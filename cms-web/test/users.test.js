import { getAUser } from './mocks/userService';

test('get a user test', () => {
  return getAUser().then(user => {
    expect(user).toHaveProperty('uid');
    expect(user).toHaveProperty('nickname');
    expect(user).toHaveProperty('age');
  });
});
