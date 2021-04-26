import React, {useState} from "react";

const GenderContainer: React.FC = () => {
  const [alert, setAlert] = useState(false);

  const handleClick = (e: React.MouseEvent) => {

  }

  return (
    <div>
      <div>
        <div>
          성별
          <i />
        </div>
        {
          alert && <i  />
        }
      </div>
      <span>
        <span>
          <label>여성</label>
          <input type={'radio'} value={'1'} onClick={handleClick} />
        </span>
        <span>
          <label>남성</label>
          <input type={'radio'} value={'2'} onClick={handleClick} />
        </span>
        <span>
          <label>직접 지정</label>
          <input type={'radio'} value={'-1'} onClick={handleClick} />
        </span>
      </span>
    </div>
  );
}

export default GenderContainer;