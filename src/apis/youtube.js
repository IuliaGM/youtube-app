import axios from 'axios';

const KEY = ''; //key removed

//preconfigured instance of axios that already has a baseURL and some default parameters loaded into it
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
