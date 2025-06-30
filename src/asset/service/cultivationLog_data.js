import axios from "axios";
import { DateConverter } from "../../components/Date/Date.jsx";

export const handleGet = async (idherd, token) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/cultivation-logs/herd/${idherd}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    response.data.cultivationLogs.forEach((element) => {
      element.date = DateConverter(element.date);
    });
    return response;
  } catch (error) {
    console.log("There was a problem with the fetch operation:", error);
  }
};

export const handleCreate = async (data, token) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/api/v1/cultivation-logs/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleDelete = async (_id, token) => {
  try {
    await axios.delete(`http://localhost:5000/api/v1/cultivation-logs/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleUpdate = async (_id, data, token) => {
  try {
    const res = await axios.patch(
      `http://localhost:5000/api/v1/cultivation-logs/${_id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log("Error: ", error);
  }
};
