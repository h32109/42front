import { makeVar } from "@apollo/client";

const imageVar = makeVar<string>(undefined);

export const setProfileImg = async (file: File) => {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = e => {
        resolve(e.target.result);
        imageVar(e.target.result.toString());
      };

      reader.onerror = e => {
        reject(e);
      };
    }
  });
};

export default imageVar;
