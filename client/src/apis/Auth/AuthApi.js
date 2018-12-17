import axios from "axios";

class AuthApi {
  registerUser = userData => axios.post("/api/users/register", userData);
  loginUser = userData => axios.post("/api/users/login", userData);
}

export default AuthApi;
