/*eslint-disable*/

import Chat from "./Chat/Chat";
import Side from "./Side/Side";
import "./Home.css";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

function Home() {
  const location = useLocation();
  const name = location.state.value;
  console.log(name);
  const socket = io("http://localhost:8080");

  socket.emit("newUser", name);

  return (
    <>
      <div className="container">
        <div className="left">
          <Side />
        </div>
        <div className="right">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Home;
