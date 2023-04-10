//모듈 불러오기
const express = require("express");
const socket = require("socket.io");
const http = require("http");
const fs = require("fs");

//초기 세팅
const app = express();
const server = http.createServer(app);
const io = socket(server);

//미들웨어, 런타임 시 static/css, static/js는 외부 클라이언트가 /css, /js로 접근 가능
app.use("/css", express.static("./static/css"));
app.use("/js", express.static("./static/js"));

app.get("/", function (request, response) {
  fs.readFile("./static/index.html", function (err, data) {
    if (err) {
      response.send("에러");
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html",
      });
      response.write(data);
      response.end();
    }
  });
  console.log("유저가 /으로 접속하였습니다!");
});

io.sockets.on("connection", function (socket) {
  console.log("유저 접속 됨");

  //클라이언트의 "send" 이벤트일때
  socket.on("send", function (data) {
    console.log("전달된 메시지:", data.msg);
  });

  socket.on("disconnect", function () {
    console.log("접속 종료");
  });
});

//서버 시작
server.listen(8080, function () {
  console.log("서버 실행 중..");
});
