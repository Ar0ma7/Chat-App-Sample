import { useEffect } from "react";
import { App } from "./App";
import { io } from "socket.io-client";
import { useSetAtom } from "jotai";
import { receiveMessagesAtom } from "../../store";

// eslint-disable-next-line react-refresh/only-export-components
export const socket = io(process.env.SERVER_ADDRESS);

export const AppContainer = () => {
  const setReceiveMessages = useSetAtom(receiveMessagesAtom);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceiveMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [setReceiveMessages]);

  return <App />;
};
