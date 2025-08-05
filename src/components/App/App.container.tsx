import { useEffect } from "react";
import { App } from "./App";
import { io } from "socket.io-client";
import { useSetAtom } from "jotai";
import { myIdAtom, receiveMessagesAtom } from "../../store";
import type { Message } from "../../../server/types";
import dayjs from "dayjs";

// eslint-disable-next-line react-refresh/only-export-components
export const socket = io(import.meta.env.VITE_SERVER_ADDRESS);
console.log("Socket connected:", import.meta.env.VITE_SERVER_ADDRESS);

export const AppContainer = () => {
  const setReceiveMessages = useSetAtom(receiveMessagesAtom);
  const setMyId = useSetAtom(myIdAtom);

  useEffect(() => {
    socket.on("connect", () => {
      setMyId(socket.id as string);
    });

    socket.on("receive_message", (data: Message) => {
      console.log(data);
      setReceiveMessages((prev) => {
        const messages = [...prev, data];
        messages.sort(
          (a, b) => dayjs(a.datetime).valueOf() - dayjs(b.datetime).valueOf()
        );
        return messages;
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [setMyId, setReceiveMessages]);

  return <App />;
};
