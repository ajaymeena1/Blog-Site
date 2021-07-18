import axios from 'axios';

const url = "http://localhost:8003/api";




export const createPost =  (post) => { axios({
    url: "http://localhost:8003/api/create",
    method: "POST", 
    data: post

}).then((res) => { console.log(res) }).catch(() => console.log("errrrrrrr "))
}


export const getAllPost = async () => {
    try {
        let response = await axios.get(`${url}/fetch`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error)
    }

}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}  

export const updatePost = async (id,post) => {
    try {
        let response = await axios.post(`${url}/update/${id}`,post);
        // return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
} 
    
