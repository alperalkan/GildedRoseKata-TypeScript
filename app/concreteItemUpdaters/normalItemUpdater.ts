import { Item } from "../item";
import { ItemUpdater } from "../itemUpdater";


export class NormalItemUpdater extends ItemUpdater {
    protected updateQuality(item: Item): void {
        if (item.sellIn >= 0) {
            this.decreaseQuality(item, 1);
        } else {
            this.decreaseQuality(item, 2);
        }
    }
}
