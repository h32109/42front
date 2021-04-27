import React, { useEffect, useMemo, useRef, useState } from "react";

const BirthdayContainer: React.FC = () => {
  const [alert, setAlert] = useState(false);

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

  useEffect(() => {
    // invalid check
    if (yearRef.current.value === "2021년") {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          생일
          <i />
        </div>
        {alert && <i />}
      </div>
      <span>
        <select ref={yearRef} defaultValue={`${date.getFullYear()}년`}>
          <option value="0" disabled>
            연도
          </option>
          {yearList.map(y => (
            <option value={y} key={y}>
              {y}
            </option>
          ))}
        </select>
        <select ref={monthRef} defaultValue={`${date.getMonth() + 1}월`}>
          <option value="0" disabled>
            월
          </option>
          {monthList.map(m => (
            <option value={m} key={m}>
              {m}
            </option>
          ))}
        </select>
        <select ref={dayRef} defaultValue={`${date.getDate()}일`}>
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
