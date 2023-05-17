import { Item } from "./item"
import { Standard } from "./helper"

export interface MenuCategory extends Standard {
    menu_id: number
    items: Item[]
}

export interface Menu extends Standard {
    is_active: boolean
    categories: MenuCategory[]
}