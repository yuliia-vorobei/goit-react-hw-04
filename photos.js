import axios from "axios";

const API_KEY = "aukwGX4CUI5OaJLUsXCrXhvuOYH3GrX46WqCuKnr0j4";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?query=${query}&page=${page}`
  );
  return data;
};
