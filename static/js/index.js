var socket = io();

socket.on("connect", function () {
  var input = document.getElementById("test");
  input.value = "접속 됨";
});

//html 중 send 메소드 실행됨
function send() {
  var message = document.getElementById("test").value;

  document.getElementById("test").value = "";

  //서버에 "send" 이벤트로 메세지를 보냄
  socket.emit("send", { msg: message });
}
