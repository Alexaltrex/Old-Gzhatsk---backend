import {bookDB} from "../db/book/BookDB";
import {IBook} from "../interfaces/book.interface";

export const bookService = {
    //============= GET ALL ===============//
    getAll: (): IBook[] => {
        return bookDB.getAll();
    },
}
