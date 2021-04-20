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
