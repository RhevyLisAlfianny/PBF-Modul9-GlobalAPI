import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getMhs = () => GetAPI('mahasiswa?_sort=id8_order=desc');
const postMhs = (dataYgDikirm) => PostAPI('mahasiswa',  dataYgDikirm);
const deleteMhs = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus);
const API = { //inisalisasi
    getMhs,
    postMhs,
    deleteMhs
}

export default API;