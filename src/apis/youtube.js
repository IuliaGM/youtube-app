import axios from 'axios';

const KEY = 'AIzaSyCEm6QSDekCTyamKdjq-Ar-Z-a5t9J0xmk';

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