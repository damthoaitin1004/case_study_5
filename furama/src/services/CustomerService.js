import axios from "axios";
export const getListCustomer = async () => {
    try {
        const result = await axios.get('http://localhost:3005/customer');
        return result.data;
    } catch (e) {
        console.log(e);
    }

}
export const addCustomer = async (customer) => {
    try {
        const result = await axios.post('http://localhost:3005/customer', customer);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const deleteCustomer = async (id) => {
    try {
        const result = await axios.delete('http://localhost:3005/customer/' + id);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const getByIdCustomer = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3005/customer/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const editCustomer = async (customer) => {
    try {
        const result = await axios.put(`http://localhost:3005/customer/${customer.id}`, customer);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}