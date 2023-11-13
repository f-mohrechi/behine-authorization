import request from "../request";

export const LoginService = (body) => {
  const response = request.post("/Auth/Login", body);

  return response;
};
