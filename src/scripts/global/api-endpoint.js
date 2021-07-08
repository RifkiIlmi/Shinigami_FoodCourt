import CONFIG from './config';

const API_ENDPOINT = {
  ALLRESTO: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  ADDREVIEW: `${CONFIG.BASE_URL}review`,
  IMAGES: {
    SMALL: (pictureId) => `${CONFIG.BASE_URL}images/small/${pictureId}`,
    MEDIUM: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
    LARGE: (pictureId) => `${CONFIG.BASE_URL}images/large/${pictureId}`,
  },
};

export default API_ENDPOINT;
