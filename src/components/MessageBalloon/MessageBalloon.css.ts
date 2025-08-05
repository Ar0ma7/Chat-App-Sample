import { css } from "@emotion/react";

export default {
  container: css`
    display: grid;
    padding: 10px 0;
  `,
  balloon: css`
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 10px;
    justify-self: start;
    position: relative;
    white-space: pre-wrap;
    word-break: break-word;
    max-width: min(70%, calc(100% - 100px));
  `,
  me: css`
    background-color: #e0f7fa;
    border: none;
    justify-self: end;
  `,
  time: css`
    display: inline-block;
    padding: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateX(100%);
    font-size: 0.8em;
    color: #888;
    min-width: 80px;
  `,
  left: css`
    right: auto;
    left: 0;
    transform: translateX(-100%);
  `,
};
