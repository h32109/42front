/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiAlertCircle } from "@mdi/js";

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

      &.alert {
        border: 1px solid red;
      }

      &:not(:first-of-type) {
        margin-left: 12px;
      }
    }
  }
`;

const BirthdayContainer: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  const date = useMemo(() => new Date(), []);

  const yearList = useMemo(() => {
    const start = 1904;
    const end = date.getFullYear();
    return Array.from({ length: end - start }, (_, k) => `${start + k + 1}년`);
  }, []);

  const monthList = useMemo(
    () => Array.from({ length: 12 }, (_, k) => `${k + 1}월`),
    [],
  );

  const dayList = useMemo(
    () => Array.from({ length: 31 }, (_, k) => `${k + 1}일`),
    [],
  );

  const handleFocus = () => {
    setShowAlert(false);
  };

  const handleBlur = () => {
    //TODO: invalid check
    if (yearRef.current.value === "2021년") {
      setShowAlert(true);
    }
  };

  return (
    <div css={divStyle}>
      <div className={"date-header"}>
        <div>
          생일
          <i />
        </div>
        {showAlert && (
          <Icon path={mdiAlertCircle} color={"red"} size={"1.7em"} />
        )}
      </div>
      <span className="date-container">
        <select
          ref={yearRef}
          defaultValue={`${date.getFullYear()}년`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="0" disabled>
            연도
          </option>
          {yearList.map(y => (
            <option value={y} key={y}>
              {y}
            </option>
          ))}
        </select>
        <select
          ref={monthRef}
          defaultValue={`${date.getMonth() + 1}월`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="0" disabled>
            월
          </option>
          {monthList.map(m => (
            <option value={m} key={m}>
              {m}
            </option>
          ))}
        </select>
        <select
          ref={dayRef}
          defaultValue={`${date.getDate()}일`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="0" disabled>
            일
          </option>
          {dayList.map(d => (
            <option value={d} key={d}>
              {d}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default BirthdayContainer;
