// function for get all book 
export const getAllBookService = async () =>{
    const API_URL = 'https://nextjs-homework005.vercel.app/api/book';

   try{
    const response = await fetch(API_URL);
    // destructure this api because it response conatin with payload array object 
    const {payload} = await response.json();

    return payload;
   }catch(error){
    console.error(error);
    throw error;
   }
}

