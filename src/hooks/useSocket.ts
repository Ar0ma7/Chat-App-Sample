import { useSetAtom } from "jotai";
import { io } from "socket.io-client";
import { myIdAtom, receiveMessagesAtom } from "../store";
import { useEffect } from "react";
import type { Message } from "../../server/types";
import dayjs from "dayjs";

export const socket = io(import.meta.env.VITE_SERVER_ADDRESS);

export const useSocket = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
