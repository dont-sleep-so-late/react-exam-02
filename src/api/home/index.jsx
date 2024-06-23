import request from "../../utils/request";

export const getData = () => {
  return request.get("/home/getData");
};

export const getEchartData = () => {
  return request.get("/home/getEchartData");
};

export const getUser = (param) => {
  return request.get("/user/getUser");
};
export const addUser = (param) => {
  return request.post("/user/addUser", param);
};

export const updateUser = (param) => {
  return request.post("/user/updateUser", param);
};

export const deleteUser = (param) => {
  return request.post("/user/deleteUser", param);
};
