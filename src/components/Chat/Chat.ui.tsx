import { Button, TextField } from "@mui/material";
import styles from "./Chat.css.ts";
import SendIcon from "@mui/icons-material/Send";
import type { Message } from "../../../server/types.ts";
import { MessageBalloon } from "../MessageBalloon";
import dayjs from "dayjs";

type Props = {
  myId: string;
  messages: Message[];
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const Chat: React.FC<Props> = ({
  myId,
  messages,
  onChange,
  onSubmit,
}) => {
  return (
    <div css={styles.container}>
      <div css={styles.messages}>
        {messages.map(({ message, senderId, datetime }, index) => (
          <>
            <MessageBalloon
              key={index}
              isMe={senderId === myId}
              message={message}
              time={dayjs(datetime).format(`MM/DD HH:mm`)}
            />
          </>
        ))}
      </div>
      <div css={styles.inputArea}>
        <TextField
          id="outlined-textarea"
          multiline
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) =>
            event.key === "Enter" && event.ctrlKey && onSubmit()
          }
          size="small"
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={onSubmit}
          css={styles.submitButton}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
