//클라이언트 코드
var socket = io();

//socket 실행되었을 때 실행됨
socket.on("connect", function () {
  //이름 입력받는 프롬포트 띄움
  var name = prompt("반갑습니다!", "");

  if (!name) {
    name = "익명";
  }

  socket.emit("newUser", name);
});

socket.on("update", function (data) {
  console.log(`${data.name}: ${data.message}`);
});

//html 중 send 메소드 실행됨
function send() {
  var message = document.getElementById("test").value;
  document.getElementById("test").value = "";

  //서버에 "message" 이벤트로 메세지를 보냄
  socket.emit("message", { type: "message", message: message });
}
