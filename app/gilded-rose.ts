export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
         // Sulfuras OR Normal
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1  // Normal
          }
        }
      } else {
        //  AgedBrie OR Backstage Pass
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1   //  AgedBrie OR Backstage Pass
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { 
            // Backstage Pass
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1  // Backstage Pass
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1 // Backstage Pass
              }
            }
          }
        }
      }

      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { 
        // AgedBrie OR BackstagePass OR Normal
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        // Handle Negative SellIn Conditions all at once
        if (this.items[i].name != 'Aged Brie') {
          // Backstage OR Sulfuras OR Normal
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') { 
            // Sulfuras OR Normal
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') { 
                // Normal
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else { 
            // BackstagePass
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else { 
          // AgedBrie
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
      
    }

    return this.items;
  }
}
