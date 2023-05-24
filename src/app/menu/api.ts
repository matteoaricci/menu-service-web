import { Menu } from "@/models";

export const getMenuById = (id: string) => {
    return fetch(`http://localhost:8080/menu/${id}`).then(res => res.json()) as Promise<Menu>
}