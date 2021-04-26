import React, {useRef, useState} from "react";
import {createPortal} from "react-dom";

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
    <div>
      <div>
        <div>{props.placeholder}</div>
        <input type={'text'} aria-label={props.placeholder} onFocus={handleFocus} onBlur={handleBlur} tabIndex={props.tabIndex}/>
      </div>
      <i />
      {
        showOverlay && <AlertInputOverlay />
      }
    </div>
    )
}

export default AlertInput;