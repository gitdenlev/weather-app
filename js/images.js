import axios from "axios";

const API_KEY = "1J8PvZehiqvMmjUaiufjJScKNkSwq9eNr9dPZDLNA2U";

async function getImageData() {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=cat`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching image data:", error);
  }
}
getImageData()
