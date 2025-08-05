import { atom } from "jotai";
import type { Message } from "../../server/types";

export const myIdAtom = atom<string>("");

export const receiveMessagesAtom = atom<Message[]>([]);

export const inputValueAtom = atom<string>("");
