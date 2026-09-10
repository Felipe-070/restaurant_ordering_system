import supabase from "../config/supabase.js";

async function findALL() {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
        throw error;
    }
    return data;
}

export default {
    findALL,
};