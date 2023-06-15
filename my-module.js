import axios from 'axios';
async function getData(id){
    
    const user = await getUser(id);
    const posts = await getPost(id);
    user.posts = posts;
    return user;
}
 

const getUser = (id) => {
    return new Promise(async(resolve, reject) => {
    const {data} =  await axios("https://jsonplaceholder.typicode.com/users/" + id);
    resolve(data);
    })   
}


const getPost = (id) => {
    return new Promise(async(resolve, reject) => {
    const {data} =  await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id);
    resolve(data);
    })
}


export default getData;