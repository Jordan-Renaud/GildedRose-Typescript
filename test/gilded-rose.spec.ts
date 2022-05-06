import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  it("runs the golden record test", function () {
    const expectedUpdatedItems = [
      { name: "Item1", sellIn: 9, quality: 4 },
      { name: "Item2", sellIn: 1, quality: 7 },
      { name: "Item3", sellIn: 3, quality: 15 },
      { name: "Item4", sellIn: 7, quality: 19 },
      { name: "Item5", sellIn: 6, quality: 14 },
      { name: "Item6", sellIn: -3, quality: 8 },
      { name: "Item7", sellIn: -7, quality: 13 },
      { name: "Item8", sellIn: -6, quality: 3 },
      { name: "Item9", sellIn: -1, quality: 28 },
      { name: "Item10", sellIn: -11, quality: 18 },
      { name: "Aged Brie", sellIn: 1, quality: 41 },
      { name: "Aged Brie", sellIn: -5, quality: 27 },
      { name: "Aged Brie", sellIn: -1, quality: 47 },
      { name: "Aged Brie", sellIn: -2, quality: 37 },
      { name: "Aged Brie", sellIn: 3, quality: 11 },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 9,
        quality: 7,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 6,
        quality: 17,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 2,
        quality: 28,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -1,
        quality: 0,
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: -2,
        quality: 0,
      },
      { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
    ];

    const gildedRose = new GildedRose([
      new Item("Item1", 10, 5),
      new Item("Item2", 2, 8),
      new Item("Item3", 4, 16),
      new Item("Item4", 8, 20),
      new Item("Item5", 7, 15),
      new Item("Item6", -2, 10),
      new Item("Item7", -6, 15),
      new Item("Item8", -5, 5),
      new Item("Item9", 0, 30),
      new Item("Item10", -10, 20),
      //Brie
      new Item("Aged Brie", 2, 40),
      new Item("Aged Brie", -4, 25),
      new Item("Aged Brie", 0, 45),
      new Item("Aged Brie", -1, 35),
      new Item("Aged Brie", 4, 10),
      //passes
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5),
      new Item("Backstage passes to a TAFKAL80ETC concert", 7, 15),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 25),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 45),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      //legendary
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);

    const actualUpdatedItems = gildedRose.updateQuality();

    expect(actualUpdatedItems).to.eql(expectedUpdatedItems);
  });
});
