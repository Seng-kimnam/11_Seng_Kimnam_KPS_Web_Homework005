    // function for get all book by id 
    export const getArticleByIdType = async (id , type ) =>     {
        // "use server"
        const default_api = `https://nextjs-homework005.vercel.app/api/${type}/${id}`
        // const API_URL = `${default_api}/${type === "book"? "book" : "cartoon"}/${id}` // tenary to get specific type 

        try{
        const response = await fetch(default_api);
        const {payload} = await response.json();
    
        return payload;
    }catch(error){
        console.error(error);
        throw error;
    }
        }
    
