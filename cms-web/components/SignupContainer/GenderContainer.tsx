import React, { useState } from "react";

const GenderContainer: React.FC = () => {
  const [alert, setAlert] = useState(false);

  const handleClick = (e: React.MouseEvent) => {};

  return (
    <div>
      <div>
        <div>
          성별
          <i />
        </div>
        {alert && <i />}
      </div>
      <span>
        <span>
          <label htmlFor="female">
            여성
            <input id="female" type="radio" name="gender" value="1" onClick={handleClick} />
          </label>
        </span>
        <span>
          <label htmlFor="male">
            남성
            <input id="male" type="radio" name="gender" value="2" onClick={handleClick} />
          </label>
        </span>
        <span>
          <label htmlFor="custom">
            직접 지정
            <input id="custom" type="radio" name="gender" value="-1" onClick={handleClick} />
          </label>
        </span>
      </span>
    </div>
  );
};

export default GenderContainer;
