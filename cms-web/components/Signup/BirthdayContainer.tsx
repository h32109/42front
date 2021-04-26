import React, {useState} from "react";

const BirthdayContainer: React.FC = () => {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      <div>
        <div>
          생일
          <i />
        </div>
        {
          alert && <i  />
        }
      </div>
      <span>
        <select>
          <option value={'0'}>연도</option>
        </select>
        <select>
          <option value={'0'}>월</option>
        </select>
        <select>
          <option value={'0'}>일</option>
        </select>
      </span>
    </div>
  )
}

export default BirthdayContainer;