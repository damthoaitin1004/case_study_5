import axios from "axios";
export const getAllContract = async (page) => {
    try {
        const result = await axios.get(`http://localhost:3005/contract?_page=${page}&_limit=5`);
        return result;
    } catch (e) {
        console.log(e)


    }
}
export const addContract = async (contract) => {
    try {
        const result = await axios.post(`http://localhost:3005/contract`, contract);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const deleteContract = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:3005/contract/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}