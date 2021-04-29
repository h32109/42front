/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, {useRef, useState} from "react";
import {createPortal} from "react-dom";

export const AlertInputStyle = css`
  font-size: 12px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  overflow: hidden;
  
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 12px;
    background: #f5f6f7;
  }
  
  &.alert {
    border: 1px solid red;
  }
`

interface AlertInputProps {
  placeholder: string;
  tabIndex?: number;
}

const AlertInputOverlay: React.FC = () => {
  //createPortal()
  return <></>
};

const AlertInput:React.FC<AlertInputProps> = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleFocus = (e: React.FocusEvent) => {
    if (showAlert) {
      setShowOverlay(true);
    }
    setShowAlert(false);
  }

  const handleBlur = (e: React.FocusEvent) => {
    setShowOverlay(false);
    // if not value
    if (!(e.target as HTMLInputElement).value) {
      setShowAlert(true);
    }
  }

  return (
    <div css={AlertInputStyle}>
      <input placeholder={props.placeholder} type={'text'} aria-label={props.placeholder} onFocus={handleFocus} onBlur={handleBlur} tabIndex={props.tabIndex}/>
      <i />
      {
        showOverlay && <AlertInputOverlay />
      }
    </div>
  )
}

export default AlertInput;