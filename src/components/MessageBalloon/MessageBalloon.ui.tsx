import styles from "./MessageBalloon.css";

type Props = {
  isMe: boolean;
  message: string;
  time: string;
};

export const MessageBalloon: React.FC<Props> = ({ isMe, message, time }) => {
  return (
    <div css={styles.container}>
      <div css={[styles.balloon, isMe && styles.me]}>
        {message}
        <span css={[styles.time, isMe && styles.left]}>{time}</span>
      </div>
    </div>
  );
};
