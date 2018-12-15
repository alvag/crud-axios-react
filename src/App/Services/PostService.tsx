import axios from 'axios';
import { Constants } from '../Constants';
import { IPost } from '../Interfaces';

export const getPosts = () => {
    return new Promise<IPost[]>((resolve, reject) => {
        axios.get(Constants.API_URL)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                resolve([]);
            });
    });
};
