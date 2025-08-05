import { Button, TextField } from "@mui/material";
import styles from "./Chat.css.ts";
import SendIcon from "@mui/icons-material/Send";
import type { Message } from "../../../server/types.ts";

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
      <div css={styles.header}></div>
      <div css={styles.messages}>
        {messages.map(({ message, senderId }, index) => (
          <>
            {senderId === myId ? (
              <div key={index}>{message} (Me)</div>
            ) : (
              <div key={index}>{message} (You)</div>
            )}
          </>
        ))}
      </div>
      <div css={styles.input}>
        <TextField
          id="outlined-textarea"
          multiline
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) =>
            event.key === "Enter" && event.ctrlKey && onSubmit()
          }
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={onSubmit}>
          Send
        </Button>
      </div>
    </div>
  );
};
