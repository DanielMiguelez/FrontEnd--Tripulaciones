import axios from "axios"

const API_URL = "http://localhost:8000";

const getAllActivities = async() =>{
  const res = await axios.get(API_URL + "/activities/getAllActivities/", );
  return res.data
}



const activityService = {
    getAllActivities
  };

export default activityService;