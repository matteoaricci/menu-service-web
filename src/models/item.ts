export interface ItemIngredient {
    id: number
    name: string
    item_id: number
    available: boolean
    created_at: Date
    updated_at: Date
}

export interface Item {
    id: number
    name: string
    available: boolean
    ingredients: ItemIngredient[],
    created_at: Date
    updated_at: Date
}