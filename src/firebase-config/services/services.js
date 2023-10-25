import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

export const getItem= (id) => {
    const item= doc (db, 'items', id)
    return getDoc(item)
}