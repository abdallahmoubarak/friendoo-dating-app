const friendoo = {};

friendoo.baseURL = "http://127.0.0.1:8000/api/v0.1";

friendoo.getAPI = async (api_route) => {
  try {
    return await axios(friendoo.baseURL + api_route);
  } catch (error) {
    console.log("Error from GET API", error);
  }
};

friendoo.postAPI = async (api_route, api_data, api_token = null) => {
  try {
    return await axios.post(friendoo.baseURL + api_route, api_data, {
      headers: {
        Authorization: "token " + api_token,
      },
    });
  } catch (error) {
    console.log("Error from POST API", error);
  }
};