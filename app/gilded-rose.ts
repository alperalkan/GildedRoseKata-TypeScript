import { ItemUpdaterFactory } from "./itemUpdaterFactory";
import { Item } from "./item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      ItemUpdaterFactory.resolveItemUpdater(item).update(item);
    }

    return this.items;
  }

}
