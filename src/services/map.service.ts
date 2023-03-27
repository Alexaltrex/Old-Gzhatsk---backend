import {IPlaceMark} from "../interfaces/map.interface";
import {mapDB} from "../db/map/mapDb";

export const mapService = {
    getAll: (): IPlaceMark[] => {
        return mapDB.getAll();
    },
    getById: (id:string): IPlaceMark => {
        return mapDB.getById(id)
    }
}
