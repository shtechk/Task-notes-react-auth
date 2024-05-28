import instance from ".";
import { removeToken, storeToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  storeToken(data.token);
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData(); // we created a new formData, because we have alot of files in this backend data, so we need VS to convert the userInfo to binary data, in order to add it to the backend data files
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const { data } = await instance.post("/auth/register", formData);

  storeToken(data.token);
  return data;
};

//to retrieve the actual token and thereafter plug it into jwt.com to understand what object info. the token contains, just: [ right click in the browser --> inspect --> application tab --> local storage ]

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

const logout = () => {
  removeToken();
};

export { login, register, me, getAllUsers, logout };
