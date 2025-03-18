export const getAllCartoonService = async () => {
    const API_URL = 'https://nextjs-homework005.vercel.app/api/cartoon';

    try{
           const response = await  fetch(API_URL);
    // destructure this api because it response conatin with payload array object 

           const {payload}  = await response.json();
           return payload;
    }catch(err){
        throw new Error('Failed to fetch cartoons');
    }
}