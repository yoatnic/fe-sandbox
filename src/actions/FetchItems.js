//@flow
export const REQUEST_NEXT_ITEMS = "REQUEST_NEXT_ITEMS";
export const RECEIVE_NEXT_ITEMS = "RECEIVE_NEXT_ITEMS";

export type Item = {
  itemId: number,
  text: string
};

export type RequestItemAction = {
  type: string,
  lastItemId: number
};

export type ReceiveItemAction = {
  type: string,
  items: Array<Item>
};

export const requestNextItems = (lastItemId: number): RequestItemAction => {
  return { type: REQUEST_NEXT_ITEMS, lastItemId };
};

export const receiveNextItems = (items: Array<Item>): ReceiveItemAction => {
  return { type: RECEIVE_NEXT_ITEMS, items };
};
