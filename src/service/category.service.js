export const getCartoonCategoryService = async () => {
    const API_URL = 'https://nextjs-homework005.vercel.app/api/cartoon_genre';

    try{
           const response = await  fetch(API_URL);
    // destructure this api because it response conatin with payload array object 

           const {payload}  = await response.json();
           return payload;
    }catch(err){
        throw new Error('Failed to fetch cartoons' , err);
    }
}

export const getBookCategoryService = async () => {
    const API_URL = 'https://nextjs-homework005.vercel.app/api/book_category';

    try{
           const response = await  fetch(API_URL);
    // destructure this api because it response conatin with payload array object 

           const {payload}  = await response.json();
           return payload;
    }catch(err){
        throw new Error('Failed to fetch cartoons' , err);
    }
}