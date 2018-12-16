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

export const getPost = (postId: number) => {
    return new Promise<IPost>((resolve, reject) => {
        axios.get(`${Constants.API_URL}/${postId}`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                resolve();
            });
    });
};

export const deletePost = (id: number) => {
    return new Promise<boolean>((resolve, reject) => {
        axios.delete(`${Constants.API_URL}/${id}`)
            .then(() => resolve(true))
            .catch((error) => {
                console.log(error);
                reject(false);
            });
    });
};

export const createPost = (post: IPost) => {
    return new Promise<any>((resolve, reject) => {
        axios.post(Constants.API_URL, { body: post })
            .then((response) => {
                resolve(response.data.id);
            })
            .catch((error) => {
                console.log(error);
                reject();
            });
    });
};
export const updatePost = (post: IPost) => {
    return new Promise<any>((resolve, reject) => {
        axios.put(`${Constants.API_URL}/${post.id}`, { body: post })
            .then((response) => {
                console.log(response);
                resolve(post.id);
            })
            .catch((error) => {
                console.log(error);
                reject();
            });
    });
};
