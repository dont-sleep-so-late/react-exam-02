import request from "../../utils/request";

export const getData = () => {
  return request.get("/home/getData");
};

export const getEchartData = () => {
  return request.get("/home/getEchartData");
};

export const getUser = () => {
  return request.get("/home/getUser");
};
