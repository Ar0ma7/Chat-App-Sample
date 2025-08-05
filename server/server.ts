import express from "express";
import http from "http";
import { Server } from "socket.io";
import type { Message } from "./types";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("ユーザー接続:", socket.id);

  socket.on("send_message", (data: Message) => {
    io.emit("receive_message", { ...data });
  });

  socket.on("disconnect", () => {
    console.log("ユーザー切断:", socket.id);
  });
});

server.listen(4000, () => {
  console.log("WebSocketサーバー起動: http://localhost:4000");
});
