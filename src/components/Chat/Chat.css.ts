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
    height: 100%;
  `,
  messages: css`
    grid-area: messages;
    overflow-y: auto;
    padding: 10px;
  `,
  inputArea: css`
    grid-area: input;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    align-items: end;
  `,
  submitButton: css`
    margin-bottom: 2px;
  `,
};
