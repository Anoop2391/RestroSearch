import axios from 'axios';

export default axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key': '5ffc91b4e5f51032011402075d06336b'
    }
});