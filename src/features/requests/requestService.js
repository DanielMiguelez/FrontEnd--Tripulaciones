import axios from "axios"

const API_URL = "http://localhost:8000";

const getAll = async() =>{
  const res = await axios.get(API_URL + "/requests/getAll" );
  return res.data
}


const requestService = {
    getAll,
  };

export default requestService;