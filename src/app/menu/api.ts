import { Menu } from "@/models";
import { get } from "@/utils/fetch";

export const getMenuById = (id: string): Promise<Menu> => {
  return get<Menu>(`http://localhost:8080/menu/${id}`);
};
