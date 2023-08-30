import axios from "axios";
export const getListCutomerType = async () => {
    try {
        const result = await axios.get("http://localhost:3005/customerType");
        return result.data;
    } catch (e) {
        console.log(e);
    }

}