import axios from "axios";

class AuthService {
  registerUser = userData => axios.post("/api/users/register", userData);
  loginUser = userData => axios.post("/api/users/login", userData);
}

export default AuthService;
