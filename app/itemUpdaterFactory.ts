import { Item } from "./item";
import { ItemUpdater } from "./itemUpdater";
import { AgedBrieItemUpdater, BackstagePassItemUpdater, ConjuredItemUpdater, NormalItemUpdater, SulfurasItemUpdater } from "./concreteItemUpdaters";

export class ItemUpdaterFactory {
    static readonly updaters = {
        "Sulfuras, Hand of Ragnaros": new SulfurasItemUpdater(),
        "Aged Brie": new AgedBrieItemUpdater(),
        "Backstage passes to a TAFKAL80ETC concert": new BackstagePassItemUpdater(),
        "Conjured Mana Cake": new ConjuredItemUpdater()
    };

    static resolveItemUpdater(item: Item): ItemUpdater {
        return this.updaters[item.name] || new NormalItemUpdater();
    }
}
