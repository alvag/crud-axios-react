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

export const deletePost = (id: number) => {
    return new Promise<boolean>((resolve, reject) => {
        axios.delete(`${Constants.API_URL}/${id}`)
            .then(() => {
                resolve(true);
            }).catch((error) => {
                console.log(error);
                reject(false);
            });
    });
};
