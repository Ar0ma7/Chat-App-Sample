import { ChatContainer } from "../Chat";
import styles from "./App.css.ts";

export const App = () => {
  return (
    <div css={styles.container}>
      <ChatContainer />
    </div>
  );
};
