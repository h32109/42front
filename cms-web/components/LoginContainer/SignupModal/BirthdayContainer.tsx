/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useMemo, useRef } from "react";
import Icon from "@mdi/react";
import { mdiAlertCircle } from "@mdi/js";
import { SignUpInputName } from "../../../constant/SignUp";

const divStyle = css`
  .date-header {
    display: flex;
    justify-content: space-between;
  }

  .date-container {
    display: flex;
    flex-direction: row;
    margin: 4px 0;

    select {
      flex: 1;
      font-size: 12px;
      height: 40px;
      border: 1px solid #ccd0d5;
      border-radius: 5px;
      overflow: hidden;
      padding-left: 8px;

      &.alert-border {
        border-color: red;
      }

      &:not(:first-of-type) {
        margin-left: 12px;
      }
    }
  }
`;

interface BirthdayContainerProps {
  showAlert: boolean;
  setShowAlert: (value: boolean) => void;
  invalidCondition: (year: number, month: number, day: number) => boolean; // check additional condition
}

const BirthdayContainer: React.FC<BirthdayContainerProps> = props => {
  const { showAlert, setShowAlert, invalidCondition } = props;

  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  const date = useMemo(() => new Date(), []);

  const yearList = useMemo(() => {
    const start = 1904;
    const end = date.getFullYear();
    return Array.from({ length: end - start }, (_, k) => start + k + 1);
  }, []);

  const monthList = useMemo(() => Array.from({ length: 12 }, (_, k) => k + 1), []);

  const dayList = useMemo(() => Array.from({ length: 31 }, (_, k) => k + 1), []);

  const handleFocus = () => {
    setShowAlert(false);
  };

  const handleBlur = () => {
    if (invalidCondition(+yearRef.current.value, +monthRef.current.value, +dayRef.current.value)) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  return (
    <div css={divStyle}>
      <div className={"date-header"}>
        <div>
          생일
          <i />
        </div>
        {showAlert && <Icon path={mdiAlertCircle} color={"red"} size={"1.7em"} />}
      </div>
      <span className="date-container">
        <select
          className={showAlert ? "alert-border" : ""}
          name={SignUpInputName.Birthday_Year}
          ref={yearRef}
          defaultValue={date.getFullYear()}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="0" disabled>
            연도
          </option>
          {yearList.map(y => (
            <option value={y} key={y}>
              {`${y}년`}
            </option>
          ))}
        </select>
        <select
          className={showAlert ? "alert-border" : ""}
          name={SignUpInputName.Birthday_Month}
          ref={monthRef}
          defaultValue={date.getMonth() + 1}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="0" disabled>
            월
          </option>
          {monthList.map(m => (
            <option value={m} key={m}>
              {`${m}월`}
            </option>
          ))}
        </select>
        <select
          className={showAlert ? "alert-border" : ""}
          name={SignUpInputName.Birthday_Day}
          ref={dayRef}
          defaultValue={date.getDate()}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="0" disabled>
            일
          </option>
          {dayList.map(d => (
            <option value={d} key={d}>
              {`${d}일`}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default BirthdayContainer;
