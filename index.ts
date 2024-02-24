import * as readline from 'readline-sync'
import { Item } from './model/ItemModel'
import { Seller } from './model/SellerModel'
import { log } from 'console';
import { exit } from 'process';
import { it } from 'node:test';

const ITEM_DATA_URL: string = "https://raw.githubusercontent.com/AP-G-1PRO-Webontwikkeling/project-webontwikkeling-fias-tairou/main/data/items.json"
const OPTIONS: string[] = ["View all data", "Filter by ID", "Exit"]


let choice: number;
let stop: boolean = false;



//Hierin moet de functie uitgevoerd worden
//Voor betere flow control (await)
(async () => {
  while (!stop) {

    console.log("Welcome to the JSON data viewer! \n");

    for (let index = 0; index < OPTIONS.length; index++) {
      const currentOptionText: string = OPTIONS[index];
      console.log(`${index + 1}. ${currentOptionText}`);
    }

    console.log("\n");
    choice = readline.questionInt("Please enter your choice: ")

    let allItems = await getAllData()

    switch (choice) {
      case 1: { await getAllITems(allItems); break }
      case 2: { await getItemById(allItems); break }
      case 3: { stopApplication(); break }
    }
  }
})()


// 
function getAllData() {
  return fetch(ITEM_DATA_URL)
    .then(response => response.json())
    .then(data => { return data })
}


async function getAllITems(itemsList: Item[]) {
  console.log("\n");
  for (let index = 0; index < itemsList.length; index++) {
    const item = itemsList[index];
    console.log(`- ${item.name} (${item.id})`);
  }

  readline.question("Press enter")
}

async function getItemById(itemsList: Item[]) {
  let id: number = readline.questionInt("Please enter the ID you want to filter by: ")
  let item: Item | undefined;

  item = itemsList.find((item) => {
    return item.id == id;
  })

  showItem(item)
  readline.question("Press enter")

}


function stopApplication() {
  console.log("bye");
  stop = true;
}


function showItem(item: Item | undefined) {
  item = item!
  
    console.log(`- ${item.name} (${item.id})`);
    console.log(`  - Description: ${item.description}`);
    console.log(`  - Age: ${item.age}`);
    console.log(`  - Active: ${item.active}`);
    console.log(`  - Birthdate: ${item.birthdate}`);
    console.log(`  - Image: ${item.image_url}`);
    console.log(`  - Condition: ${item.condition}`);
    console.log(`  - Hobbies: ${item.hobbies.join(', ')}`);
    console.log(`  - Seller:`);
    console.log(`    - Name: ${item.seller.name}`);
    console.log(`    - Seller ID: ${item.seller.id}`);
    console.log(`    - Verified Seller: ${item.seller.is_verified}`);
    console.log(`    - Rating: ${item.seller.rating}`);
    console.log(`    - Profile Picture URL: ${item.seller.profile_picture_url}`);
  
}