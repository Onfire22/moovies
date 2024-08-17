const getUrl = (query = 'matrix', type = '') => `http://www.omdbapi.com/?apikey=972a7760&s=${query}&type=${type}`;

export default getUrl;