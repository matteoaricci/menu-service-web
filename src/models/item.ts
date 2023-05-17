import { Standard } from "./helper"

export interface ItemIngredient extends Standard {
    itemId: string
    available: boolean
}

export interface Item extends Standard {
    available: boolean
    ingredients: ItemIngredient[],
}