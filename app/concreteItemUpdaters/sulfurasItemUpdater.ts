import { Item } from "../item";
import { ItemUpdater } from "../itemUpdater";


export class SulfurasItemUpdater extends ItemUpdater {
    protected updateSellIn(item: Item): void {
        if(item.sellIn != 0){
            item.sellIn = 0;
        }
    }

    protected updateQuality(item: Item): void {
        if(item.quality != 80) {
            item.quality = 80;
        }
    }
}
