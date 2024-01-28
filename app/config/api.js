import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.130.202:9000",
});

const getAllPlaces = async () => {
  try {
    const response = await api.get("/places/all");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getPlaceDetails = async (id) => {
  try {
    const response = await api.get(`/places/detail/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllPlaces, getPlaceDetails };
