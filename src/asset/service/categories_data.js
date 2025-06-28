import axios from "axios";
export const urlGet = "http://localhost:5000/api/v1/categories?limit=60";

export const handleGet = async (
  token,
  currentLimit,
  currentPage,
  value = ""
) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/categories?limit=${currentLimit}&page=${currentPage}&searchQuery=${encodeURIComponent(
        value
      )}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was a problem with the fetch operation:", error);
  }
};

export const handleCreate = async (data, token) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/categories",
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
    await axios.delete(`http://localhost:5000/api/v1/categories/${_id}`, {
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
      `http://localhost:5000/api/v1/categories/${_id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.category;
  } catch (error) {
    console.log("Error: ", error);
  }
};
