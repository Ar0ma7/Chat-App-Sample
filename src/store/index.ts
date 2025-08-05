import { atom } from "jotai";
import type { ReceiveMessages } from "./types";

export const receiveMessagesAtom = atom<ReceiveMessages>([]);

export const inputValueAtom = atom<string>("");
