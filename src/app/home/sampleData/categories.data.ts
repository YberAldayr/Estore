import { Category } from "../types/category.type";

export const categories: Category[] = [
    {
        id: 1,
        category: "Hombres",
        parent_category_id: undefined
    },
    {
        id: 2,
        category: "Mujeres",
        parent_category_id: undefined
    },
    {
        id: 3,
        category: "Niños",
        parent_category_id: undefined
    },
    {
        id: 4,
        category: "Ropa Casual",
        parent_category_id: 1
    },
    {
        id: 5,
        category: "Ropa de Fiesta",
        parent_category_id: 2
    },
    {
        id: 6,
        category: "Calzados",
        parent_category_id: 2
    },
    {
        id: 7,
        category: "Accesorios",
        parent_category_id: 3
    }
];