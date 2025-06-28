import axios from "axios";


export const handleCreate = async (data, token) => {
    try {
        const res=  await axios.post("http://localhost:5000/api/v1/distributors", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res;
    } catch (error) {
        console.log("Error:", error);
    }
};

export const handleDelete = async (_id, token) => {
    try {
         await axios.delete(`http://localhost:5000/api/v1/distributors/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.log("Error:", error);
    }
};

export const handleUpdate = async (_id,data,token) => {
    try {
       const res= await axios.patch(`http://localhost:5000/api/v1/distributors/${_id}`,data,{
        headers: {
            Authorization: `Bearer ${token}`
        } 
    });
    return res.data.distributor;
    } catch (error) {
        console.log("Error: ", error);
    }
};

