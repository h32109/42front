import { makeVar } from "@apollo/client";

const isShowPopupVar = makeVar<boolean>(false);

export const setIsShowPopupVar = async (bool: boolean) => {
  isShowPopupVar(bool);
};

export default isShowPopupVar;
