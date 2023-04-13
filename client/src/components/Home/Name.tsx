/*eslint-disable*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Name() {
  const [name, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setMessage("");
    navigate("/home", { state: { value: name } });
  };

  return (
    <div>
      <h1>이름을 입력해주세요</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange}></input>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default Name;
