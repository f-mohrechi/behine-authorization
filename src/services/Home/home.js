import request from "../request";

export async function getProvinces(token) {
  try {
    const response = await request.get("/CityAndProvince/GetProvince", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCities(token) {
  try {
    const response = await request.get(`/CityAndProvince/GetCity`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
