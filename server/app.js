//모듈 불러오기
const express = require("express");
const http = require("http");
const fs = require("fs");
const cors = require("cors");

//초기 세팅
const app = express();
const server = http.createServer(app);

//socket.io, 서버측의 cors 설정
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.get("/", function (request, response) {
  /*
  fs.readFile("./static/index.html", function (err, data) {
    if (err) {
      response.send("에러");
    } else {
      //제대로 응답함
      response.writeHead(200, {
        "Content-Type": "text/html",
      });
      response.write(data);
      response.end();
    }
  });
  */

  response.sendStatus(200);

  console.log("유저가 /으로 접속하였습니다!");
});

//socket x sockets o
io.sockets.on("connection", function (socket) {
  //새로운 유저 접속
  socket.on("newUser", function (name) {
    console.log(name + "님이 접속하셨습니다.");

    //소켓에 이름을 저장
    socket.name = name;

    io.sockets.emit("update", {
      type: "connect",
      name: "SERVER",
      message: name + "님이 접속하셨습니다.",
    });
  });

  socket.on("message", function (data) {
    data.name = socket.name;

    console.log(data);

    //클라이언트에 전달
    socket.broadcast.emit("update", data);
  });

  //클라이언트의 "disconnect" 이벤트일때
  socket.on("disconnect", function () {
    console.log(socket.name + "님이 나가셨습니다.");

    //클라이언트에 전달
    socket.broadcast.emit("update", {
      type: "disconnect",
      name: "SERVER",
      message: socket.name + "님이 나가셨습니다.",
    });
  });
});

//서버 시작
server.listen(8080, function () {
  console.log("서버 실행 중..");
});
