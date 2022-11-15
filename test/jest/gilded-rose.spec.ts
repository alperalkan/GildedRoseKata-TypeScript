import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose Test Suite', () => {

  describe('Test Fixture for Extremum Values', () => {

    it('Expect Quality Value not to be higher than 50 except for "Sulfuras, Hand of Ragnaros" items', () => {
      const inputItems = new Array<Item>(
        new Item("Aged Brie", 0, 50),
        new Item("Aged Brie", -1, 49),
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[1].quality).toBe(50);
      expect(items[2].quality).toBe(80);
      expect(items[3].quality).toBe(80);
      expect(items[4].quality).toBe(50);
      expect(items[5].quality).toBe(50);
      expect(items[6].quality).toBe(50);
    });

    it('Expect Quality Value not to be lower than 0 for any Items', () => {
      const inputItems = new Array<Item>(
        new Item("+5 Dexterity Vest", 0, 0),
        new Item("+5 Dexterity Vest", -1, 1),
        new Item("Elixir of the Mongoose", 0, 0),
        new Item("Elixir of the Mongoose", -1, 1)
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[1].quality).toBe(0);
      expect(items[2].quality).toBe(0);
      expect(items[3].quality).toBe(0);

    });

  });

  describe('Test Fixture for Normal Items', () => {

    it('Expect Quality Value drop by 1 when SellIn Value >= 0', () => {
      const inputItems = new Array<Item>(
        new Item("+5 Dexterity Vest", 10, 20),
        new Item("Elixir of the Mongoose", 5, 7)
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
      expect(items[1].quality).toBe(6);
    });

    it('Expect Quality Value drop by 2 when SellIn Value < 0', () => {
      const inputItems = new Array<Item>(
        new Item("+5 Dexterity Vest", -1, 20),
        new Item("Elixir of the Mongoose", -1, 7)
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
      expect(items[1].quality).toBe(5);
    });

  });

  describe('Test Fixture for "Aged Brie" Items', () => {

    it('Expect Quality Value increase by 1 when SellIn Value >= 0', () => {
      const inputItems = new Array<Item>(
        new Item("Aged Brie", 2, 0)      
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
    });

    it('Expect Quality Value increase by 2 when SellIn Value < 0', () => {
      const inputItems = new Array<Item>(
        new Item("Aged Brie", 0, 0)      
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
    });

  });

  describe('Test Fixture for "Sulfuras, Hand of Ragnaros" Items', () => {
    
    it('Expect neither SellIn nor Quality Values to change', () => {
      const inputItems = new Array<Item>(
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Sulfuras, Hand of Ragnaros", -1, 80)
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[1].quality).toBe(80);
    });
    
  });


  describe('Test Fixture for "BackstagePass" Items', () => {

    it('Expect Quality Value increase by 1 when SellIn Value > 10', () => {
      const inputItems = new Array<Item>(
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
    });

    it('Expect Quality Value increase by 2 when 5 < SellIn Value < 11', () => {
      const inputItems = new Array<Item>(
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(42);
    });

    it('Expect Quality Value increase by 3 when SellIn Value < 6', () => {
      const inputItems = new Array<Item>(
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40),
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(43);
    });

    it('Expect Quality Value drop to 0 when SellIn Value < 0', () => {
      const inputItems = new Array<Item>(
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40),
      );
      const gildedRose = new GildedRose(inputItems);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

  });


  // Test Fixture for "Conjured" Items
  // NOT WORKING FOR NOW SINCE CONJURED ITEMS ARE NOT INTRODUCED YET
  // describe('Test Fixture for "Conjured" Items', () => {

  //   it('Expect Quality Value drop by 2 when SellIn Value >= 0', () => {
  //     const inputItems = new Array<Item>(
  //       new Item("Conjured Mana Cake", 3, 6)
  //     );
  //     const gildedRose = new GildedRose(inputItems);
  //     const items = gildedRose.updateQuality();
  //     expect(items[0].quality).toBe(4);
  //   });

  //   it('Expect Quality Value drop by 4 when SellIn Value < 0', () => {
  //     const inputItems = new Array<Item>(
  //       new Item("Conjured Mana Cake", -1, 6)
  //     );
  //     const gildedRose = new GildedRose(inputItems);
  //     const items = gildedRose.updateQuality();
  //     expect(items[0].quality).toBe(2);
  //   });

  // });

});