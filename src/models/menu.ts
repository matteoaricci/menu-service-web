import { Item } from "./item"

export interface MenuCategory {
    id: number
    name: string
    menu_id: number
    items: Item[]
    created_at: Date
    updated_at: Date
}

export interface Menu {
    id: number
    name: string
    is_active: boolean
    categories: MenuCategory[]
    created_at: Date
    updated_at: Date
}