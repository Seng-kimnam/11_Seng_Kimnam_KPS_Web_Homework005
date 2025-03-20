export const getArticleByIdType = async (id, type) => {
    if (!id || !type) {
        throw new Error("Invalid ID or type");
    }

    const default_api = "https://nextjs-homework005.vercel.app/api"; // Ensure no trailing slash
    const endpoint = type === "book" ? "book" : "cartoon";
    
    const API_URL = `${default_api}/${endpoint}/${id}`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const { payload } = await response.json();
        return payload;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};
