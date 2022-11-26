import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googlesapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBHBjRJ-8JtTZKFraU-5gbVjX0tRYXGw4g'
    }
})
