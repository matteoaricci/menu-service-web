import { Item } from "./item"
import { Standard } from "./helper"

export interface MenuCategory extends Standard {
    menuId: number
    items: Item[]
}

export interface Menu extends Standard {
    isActive: boolean
    categories: MenuCategory[]
}