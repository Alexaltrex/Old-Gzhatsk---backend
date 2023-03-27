import {IPlaceMark, IPlaceMarks} from "../../interfaces/map.interface";
import {mapMock} from "./mapMock";

class MapDB {
    private _items: IPlaceMarks = mapMock

    public getAll(): IPlaceMark[] {
        return Object.values(this._items)
    }

    public getById(id: string): IPlaceMark {
        return this._items[id];
    }
}

export const mapDB = new MapDB();
