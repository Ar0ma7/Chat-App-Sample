import { Button, TextField } from "@mui/material";
import styles from "./Chat.css.ts";
import SendIcon from "@mui/icons-material/Send";
import type { ReceiveMessages } from "../../store/types.ts";

type Props = {
  receiveMessages: ReceiveMessages;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const Chat: React.FC<Props> = ({
  receiveMessages,
  onChange,
  onSubmit,
}) => {
  return (
    <div css={styles.container}>
      <div css={styles.header}></div>
      <div css={styles.messages}>
        {receiveMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div css={styles.input}>
        <TextField
          id="outlined-textarea"
          multiline
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && onSubmit()}
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={onSubmit}>
          Send
        </Button>
      </div>
    </div>
  );
};
