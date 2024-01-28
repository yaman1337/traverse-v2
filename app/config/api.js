import axios from "axios";
import { account } from "../src/lib/appwrite";

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

const getPlaceReviews = async (id) => {
  try {
    const response = await api.get(`/reviews/all/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const addReview = async (id, rating, review) => {
  const jwt = await account.createJWT();
  try {
    const response = await fetch("http://10.0.130.202:9000/reviews/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt.jwt}`,
      },
      body: JSON.stringify({
        place_id: id,
        rating: rating,
        message: review,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllPlaces, getPlaceDetails, getPlaceReviews, addReview };
