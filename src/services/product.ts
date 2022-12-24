import axios from "axios";
const base_url = 'https://dummyjson.com';


export const fetchFromUrl = async (path: string) => {
    try {
        return await axios.get(`${base_url}/${path}`);

    } catch (err) {
        console.log(err);
    }
}

export const getAllProducts = async (limit = 15) => {
    const res = await fetchFromUrl(`products?limit=${limit}`);
    return res?.data;
}

export const getAllProductsByCategory = async (category: string, limit = 15) => {
    return await fetchFromUrl(`products/category/${category}?limit=${limit}`)
}

export const getAllCategories = async () => {
    return await fetchFromUrl(`products/categories`);
}