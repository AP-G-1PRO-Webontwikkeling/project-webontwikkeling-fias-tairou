import express from "express";
import * as itemService from "./services/ItemService";
import { AuctionEvent } from "./models/AuctionEventModel";

let app = express();
let port: number | undefined;
let auctions: AuctionEvent[] | undefined;

app.set("view engine", "ejs");
app.set("port", 3000);

app.get("/", (req, res) => {
  res.render("index", { auctions: auctions });
});

app.get("/items", (req, res) => {
  res.render("index", { auctions: auctions });
});



// Load in data and listen
port = app.get("port");
app.listen(port, async () => {
  console.log("Loading in data ");
  auctions = await itemService.getAllData();
  console.log(auctions);
  console.log("done");
  console.log("Listening on port " + port);
});
