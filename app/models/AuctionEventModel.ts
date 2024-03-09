import {Item} from './ItemModel'


export type AuctionEvent = {
  eventId: number;
  eventName: string;
  startDate: string;
  endDate: string;
  currentHighestBid: string;
  item: Item
};
