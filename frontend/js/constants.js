const friendoo = {};

friendoo.baseURL = "http://127.0.0.1:8000/api/v0.1";

friendoo.getAPI = async (api_url) => {
  try {
    return await axios(api_url);
  } catch (error) {
    friendoo.Console("Error from GET API", error);
  }
};

friendoo.postAPI = async (api_url, api_data, api_token = null) => {
  try {
    return await axios.post(api_url, api_data, {
      headers: {
        Authorization: "token " + api_token,
      },
    });
  } catch (error) {
    friendoo.Console("Error from POST API", error);
  }
};
