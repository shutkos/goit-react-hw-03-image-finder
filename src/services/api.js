import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
    const key = "15389377-cd5c6eeb2733abcfcbe8031bb";
    return axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    ).then((response) => response.data.hits);
};

export default {
    fetchImagesWithQuery,
};