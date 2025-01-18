import axios from "axios";

const API_BASE_URL = "https://contactus-fcqq.onrender.com/api/v1/contact";

export const sendContactForm = async (formData) => {
  try {
    console.log("Sending data:", formData);
    const response = await axios.post(`${API_BASE_URL}/create`, formData);
    console.log("Response received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error occurred:", error.response || error.message);
    throw new Error(
      error.response?.data?.message || "You have already submitted a contact form."
    );
  }
};

