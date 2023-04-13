import Banner from "./Banner/Banner";
import Body from "./Body/Body";
import Send from "./Send/Send";
import "./Chat.css";

function Chat() {
  return (
    <>
      <div>
        <Banner />
        <Body />
        <div className="arrange">
          <Send />
        </div>
      </div>
    </>
  );
}

export default Chat;
