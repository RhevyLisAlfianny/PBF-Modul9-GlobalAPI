import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getNewsBlog = () => GetAPI('post?_sort=id8_order=desc');
const postNewsBlog = (dataYgDikirm) => PostAPI('post',  dataYgDikirm);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('post', dataYgDiHapus);
const API = { //inisalisasi
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;