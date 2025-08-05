import { useCallback, useMemo } from "react";
import { Chat } from "./Chat.ui";
import { useAtom, useAtomValue } from "jotai";
import { inputValueAtom, myIdAtom, receiveMessagesAtom } from "../../store";
import dayjs from "dayjs";
import { socket } from "../../hooks/useSocket";

export const ChatContainer = () => {
  const [inputValue, setInputValue] = useAtom(inputValueAtom);
  const myId = useAtomValue(myIdAtom);
  const receiveMessages = useAtomValue(receiveMessagesAtom);

  const sortedMessages = useMemo(
    () =>
      receiveMessages.sort(
        (a, b) => dayjs(a.datetime).valueOf() - dayjs(b.datetime).valueOf()
      ),
    [receiveMessages]
  );

  const handleChange = useCallback(
    (value: string) => {
      console.log(value);
      setInputValue(value);
    },
    [setInputValue]
  );

  const handleSubmit = useCallback(() => {
    if (inputValue.trim()) {
      socket.emit("send_message", {
        datetime: dayjs(),
        senderId: myId,
        message: inputValue,
      });
      setInputValue("");
    }
  }, [inputValue, myId, setInputValue]);

  return (
    <Chat
      inputValue={inputValue}
      myId={myId}
      messages={sortedMessages}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
