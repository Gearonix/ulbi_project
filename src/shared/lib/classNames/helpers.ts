import axios from 'axios';

export const helpers = (callback: () => string, ms: number = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(callback()), ms);
    });
};

export const returnSomeData = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
};
