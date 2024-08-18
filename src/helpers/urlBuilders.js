const API_KEY = process.env.REACT_APP_API_KEY;

const getRandomMovie = () => {
  const keyWords = [
    'matrix',
    'MIB',
    'x-files',
    'iron man',
    'batman',
    'spiderman',
    'mad max',
    'alien',
    'predator',
    'saw',
    'american pie',
    'this',
    'transformers',
    'disney',
    'star wars',
    'The Lord of the Rings',
    'x-men',
    'indiana jones',
    'jackie chan'
  ];
  const randomIndex = Math.floor(Math.random() * keyWords.length);
  return keyWords[randomIndex];
};

const buildInitialUrl = () => {
  const randomMovie = getRandomMovie();
  return `https://www.omdbapi.com/?apikey=${API_KEY}&s=${randomMovie}`;
};

const buildQueryUrl = (query = 'matrix', type = '') => `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=${type}`;

export { buildInitialUrl, buildQueryUrl };