export function getAUser(uid) {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = {
        uid: uid,
        nickname: `User_${uid}`,
        age: parseInt(Math.random() * 120) + 1,
      };

      resolve(user);
    }, 100);
  });
}

export function createNewUser(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`New user [${user.nickname}] is successfully created.`)
    }, 100)
  })
}
