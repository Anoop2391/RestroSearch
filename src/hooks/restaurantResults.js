import { useEffect, useState } from 'react';
import zomato from '../api/zomato';

export default () =>{
    const [restaurantResults, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const restaurantListApi = async(searchTerm) => {
        try {
            const response = await zomato.get(`/search?entity_id=1&entity_type=city&q=${searchTerm}`);
            setResults(response.data.restaurants);
        } catch(err){
            setErrorMessage('Something went wrong.')
        }
    }

    useEffect(() => {
        restaurantListApi('North')
    }, [])
    return [restaurantListApi, restaurantResults, errorMessage];
}