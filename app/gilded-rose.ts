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
    const items = this.items;

    for (let i = 0; i < items.length; i++) {
      const itemName = items[i].name;
      //const itemQuality = items[i].quality;
      if (
        itemName != "Aged Brie" &&
        itemName != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (items[i].quality > 0) {
          if (itemName != "Sulfuras, Hand of Ragnaros") {
            items[i].quality = items[i].quality - 1;
          }
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
          if (itemName == "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].sellIn < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1;
              }
            }
            if (items[i].sellIn < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1;
              }
            }
          }
        }
      }
      if (itemName != "Sulfuras, Hand of Ragnaros") {
        items[i].sellIn = items[i].sellIn - 1;
      }
      if (items[i].sellIn < 0) {
        if (itemName != "Aged Brie") {
          if (itemName != "Backstage passes to a TAFKAL80ETC concert") {
            if (items[i].quality > 0) {
              if (itemName != "Sulfuras, Hand of Ragnaros") {
                items[i].quality = items[i].quality - 1;
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality;
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1;
          }
        }
      }
    }

    return items;
  }
}
