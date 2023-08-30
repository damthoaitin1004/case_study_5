import axios  from "axios";
export const getListTypeRental = async()=>{
    try{
        const result = await axios.get('http://localhost:3005/typeRental');
        return result.data
    }catch(e){
        console.log(e);
    }
}