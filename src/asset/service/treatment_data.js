import axios from "axios";

export const handleGetHerdTreatment = async (idherd, token) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/treatments/herd/${idherd}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.treatments;
  } catch (error) {
    console.log("Error: ", error);
  }
};
export const handleCreate = async (data, token) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/treatments`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.treatment;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleDelete = async (_id, token) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/treatments/${_id}`, {
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
      `${process.env.REACT_APP_API_URL}/api/v1/treatments/${_id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.treatment;
  } catch (error) {
    console.log("Error: ", error);
  }
};
