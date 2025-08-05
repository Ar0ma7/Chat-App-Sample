import { css } from "@emotion/react";

export default {
  container: css`
    display: grid;
    grid-template-areas:
      "header"
      "messages"
      "input";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  `,
  header: css`
    grid-area: header;
  `,
  messages: css`
    grid-area: messages;
  `,
  input: css`
    grid-area: input;
  `,
};
