import React, { Dispatch, SetStateAction } from "react";
import Icon from "@mdi/react";
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js";

type HidePasswordButtonProps = {
  hide: boolean;
  setHide: Dispatch<SetStateAction<boolean>>;
};

const HidePasswordButton: React.FC<HidePasswordButtonProps> = ({ hide , setHide}) => {
  const handleHideButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHide(!hide);
  };
  return (
    <>
      {hide ? (
        <a onClick={handleHideButtonClick}>
          <Icon size={0.6} path={mdiEyeOutline} />
        </a>
      ) : (
        <a onClick={handleHideButtonClick}>
          <Icon size={0.6} path={mdiEyeOffOutline} />
        </a>
      )}
    </>
  );
};

export default HidePasswordButton;
