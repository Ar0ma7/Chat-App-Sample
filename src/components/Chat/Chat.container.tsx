import { useCallback } from "react";
import { Chat } from "./Chat";
import { socket } from "../App/App.container";
import { useAtom, useAtomValue } from "jotai";
import { inputValueAtom, receiveMessagesAtom } from "../../store";

export const ChatContainer = () => {
  const [inputValue, setInputValue] = useAtom(inputValueAtom);
  const receiveMessages = useAtomValue(receiveMessagesAtom);

  const handleChange = useCallback(
    (value: string) => {
      console.log(value);
      setInputValue(value);
    },
    [setInputValue]
  );

  const handleSubmit = useCallback(() => {
    if (inputValue.trim()) {
      socket.emit("send_message", inputValue);
      setInputValue("");
    }
  }, [inputValue, setInputValue]);

  return (
    <Chat
      receiveMessages={receiveMessages}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
