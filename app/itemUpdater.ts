import { Item } from "./item";


export abstract class ItemUpdater {
    public update(item: Item): void {
        this.updateSellIn(item);
        this.updateQuality(item);
    }

    protected updateSellIn(item: Item): void {
        item.sellIn -= 1;
    }

    protected abstract updateQuality(item: Item): void;

    protected increaseQuality(item: Item, value: number): void {
        item.quality += value;
        if (item.quality > 50) {
            this.setQuality(item, 50);
        }
    }

    protected decreaseQuality(item: Item, value: number): void {
        item.quality -= value;
        if (item.quality < 0) {
            this.setQuality(item, 0);
        }
    }

    protected setQuality(item: Item, value: number): void {
        item.quality = value;
    }
}
