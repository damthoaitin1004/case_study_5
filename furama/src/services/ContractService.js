import axios from "axios";
export const getAllContract = async () => {
    try {
        const result = await axios.get(" http://localhost:3005/contract");
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const addContract = async (contract) => {
    try {
        const result = await axios.post(`http://localhost:3005/contract`,contract);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}