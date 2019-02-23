import { ListActions } from "./types";

export const add = (value: string) =>
  ({ type: ListActions.ADD, value });

export const remove = (id: number) =>
  ({ type: ListActions.REMOVE, id });

export const edit = (id: number, value: string) =>
  ({ type: ListActions.EDIT, id, value });

export const toggle = (id: number) =>
  ({ type: ListActions.TOGGLE, id });

export const clear = () =>
  ({ type: ListActions.CLEAR });
