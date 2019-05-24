import axios from 'axios';

const KEY = 'AIzaSyDuNavfMbu8xZLhjk3xPvQCT5kksnZtoao';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    type: 'video',
    key: KEY
  }
})