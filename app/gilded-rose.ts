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
      const itemQuality = items[i].quality;
      const itemSellIn = items[i].sellIn;

      //Sulfuras does not change in value
      if (itemName === "Sulfuras, Hand of Ragnaros") continue;

      if (
        itemName != "Aged Brie" &&
        itemName != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (itemQuality > 0) {
          items[i].quality = itemQuality - 1;
        }
      } else {
        if (itemQuality < 50) {
          items[i].quality++;
          if (itemName == "Backstage passes to a TAFKAL80ETC concert") {
            if (itemSellIn < 50) {
              items[i].quality++;
            }

            if (itemSellIn < 6 && itemQuality < 50) {
              items[i].quality++;
            }
          }
        }
      }

      items[i].sellIn--;

      if (items[i].sellIn < 0) {
        if (itemName != "Aged Brie") {
          if (itemName != "Backstage passes to a TAFKAL80ETC concert") {
            if (itemQuality > 0) {
              items[i].quality--;
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality;
          }
        } else {
          if (itemQuality < 50) {
            items[i].quality++;
          }
        }
      }
    }

    return items;
  }
}
