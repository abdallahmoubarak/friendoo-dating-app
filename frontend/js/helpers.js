const friendoo = {};

friendoo.baseURL = "http://127.0.0.1:8000/api/v0.1";

friendoo.getAPI = async (api_route) => {
  try {
    const res = await axios(friendoo.baseURL + api_route);
    return res;
  } catch (error) {
    return error.response.data.message;
  }
};

friendoo.postAPI = async (api_route, api_data, api_token = null) => {
  try {
    const res = await axios.post(friendoo.baseURL + api_route, api_data, {
      headers: {
        Authorization: "token " + api_token,
      },
    });
    return res;
  } catch (error) {
    return error.response.data.message;
  }
};
