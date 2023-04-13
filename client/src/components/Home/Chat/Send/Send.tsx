/*eslint-disable*/

import "./Send.css";
import { useState } from "react";
import io from "socket.io-client";

function Send() {
  const [message, setMessage] = useState<string>("");
  const socket = io("http://localhost:8080");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <>
      <div className="Send">
        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={handleChange} />
          <button type="submit">전송</button>
        </form>
      </div>
    </>
  );
}

export default Send;
