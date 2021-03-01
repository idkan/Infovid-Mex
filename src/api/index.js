// Make functions that they going to fetch some data that we need.
import axios from 'axios';

const baseURL = 'https://disease.sh/v3/covid-19/countries/Mexico';

export const fetchData = async () => {
    try {
        const { data: { cases, recovered, deaths, updated } } = await axios.get(baseURL);
        
        return { cases, recovered, deaths, updated };
        
    } catch (error) {
        console.log(error);
    }

}