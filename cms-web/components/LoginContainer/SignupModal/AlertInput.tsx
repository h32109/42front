/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, {useRef, useState} from "react";
import {createPortal} from "react-dom";
import Icon from "@mdi/react";
import { mdiAlertCircle } from "@mdi/js";

export const AlertInputStyle = css`
  font-size: 12px;
  height: 40px;
  border: 1px solid #CCD0D5;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  &.input-alert {
    border: 1px solid red;
  }
  
  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 12px;
    background: #f5f6f7;
  }
  
  svg {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`

interface AlertInputProps {
  placeholder: string;
  tabIndex?: number;
  invalidCondition?: (value: string) => boolean; // check additional condition
}

const AlertInputOverlay: React.FC = () => {
  //createPortal()
  return <></>
};

const AlertInput: React.FC<AlertInputProps> = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleFocus = (e: React.FocusEvent) => {
    if (showAlert) {
      setShowOverlay(true);
    }
    setShowAlert(false);
  }

  const handleBlur = (e: React.FocusEvent) => {
    const value = (e.target as HTMLInputElement).value;

    setShowOverlay(false);
    // if not value
    if (!value || (props.invalidCondition && props.invalidCondition(value))) {
      setShowAlert(true);
    }
  }

  return (
    <div css={AlertInputStyle} className={showAlert ? 'input-alert' : ''}>
      <input placeholder={props.placeholder} type={'text'} aria-label={props.placeholder} onFocus={handleFocus} onBlur={handleBlur} tabIndex={props.tabIndex}/>
      {
        showAlert &&
        <Icon path={mdiAlertCircle} color={"red"} size={'1.7em'}/>
      }
      {
        showOverlay && <AlertInputOverlay />
      }
    </div>
  )
}

export default AlertInput;