import { Item } from "../item";
import { ItemUpdater } from "../itemUpdater";


export class BackstagePassItemUpdater extends ItemUpdater {
    protected updateQuality(item: Item): void {
        if (item.sellIn < 0) {
            this.setQuality(item, 0);
        } else if (item.sellIn <= 5) {
            this.increaseQuality(item, 3);
        } else if (item.sellIn <= 10) {
            this.increaseQuality(item, 2);
        } else {
            this.increaseQuality(item, 1);
        }
    }
}
