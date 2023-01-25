import axios from "axios"

const API_URL = "http://localhost:8000";
const user = JSON.parse(localStorage.getItem("user"));

const register = async (userData) => {
    
    const res = await axios.post(API_URL + "/users/createUser", userData);
    return res.data;
    
}

const login = async (user) => {

  const res = await axios.post(API_URL + '/users/login', user)

  if (res.data) {

      localStorage.setItem("user", JSON.stringify(res.data));

  }

  return res.data

}

const profile = async (id) => {

  const res = await axios.get(API_URL + '/users/getUserById/'+ id)

  return res.data
}

const updateProfile = async (test) => {
    
  const res = await axios.put(API_URL + "/users/update/" + test.id, test.postCreated, {

      headers: {
  
          authorization: user.token,
  
      },
  
  });
  console.log(res.data)
  return res.data;

};

const logout = async () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const res = await axios.delete(API_URL + "/users/logout", {

      headers: {

          authorization: user?.token,

      },

  });

  if (res.data) {

      localStorage.removeItem("user");

  }

  return res.data;

};

const authService = {
  register,
  login,
  profile,
  updateProfile,
  logout
};

export default authService;
