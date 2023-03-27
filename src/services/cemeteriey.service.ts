import {cemeteryDB} from "../db/cemetery/CemeteryDB";

export const cemeteryService = {
    getAll: () => cemeteryDB.getAll(),
    getById: (id: string) => cemeteryDB.getById(id)
}
