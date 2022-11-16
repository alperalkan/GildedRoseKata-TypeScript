import { Item } from "../item";
import { ItemUpdater } from "../itemUpdater";

export class AgedBrieItemUpdater extends ItemUpdater {
    protected updateQuality(item: Item): void {
        if (item.sellIn >= 0) {
            this.increaseQuality(item, 1);
        } else {
            this.increaseQuality(item, 2);
        }
    }
}
