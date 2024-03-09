import { AuctionEvent } from "../models/AuctionEventModel";
import { Item } from "../models/ItemModel";

const ITEM_DATA_URL: string =
  'https://raw.githubusercontent.com/fias-tairou/auction-server/main/auctiondb.json'

export async function getAllData(): Promise<AuctionEvent[]> {
  return fetch(ITEM_DATA_URL)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export async function getItemById(itemsList: Item[], id: number) {
  let item: Item | undefined;

  item = itemsList.find((item) => {
    return item._id == id;
  });

  return item;
}

module.exports = { getAllData, getItemById };
