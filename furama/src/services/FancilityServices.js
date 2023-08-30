import axios from "axios";
export const getAll = async () => {
    try {
        const result = await axios.get(' http://localhost:3005/fancilities');
        return result.data;
    }
    catch (e) {
        console.log(e)
    }
}
export const addService = async (service) => {
    try {
        const result = await axios.post('http://localhost:3005/fancilities', service);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const deleteService = async (id) => {
    try {
        const result = await axios.delete("http://localhost:3005/fancilities/" + id);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const getByIdService = async (id) => {
    try {
        const result = await axios.get("http://localhost:3005/fancilities/" + id);
        return result.data;
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

export const editService = async (service) => {
    try {
        const result = await axios.put(`http://localhost:3005/fancilities/${service.id}`, service);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}