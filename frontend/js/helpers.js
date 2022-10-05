const friendoo = {};

friendoo.baseURL = "http://127.0.0.1:8000/api/v0.1";
friendoo.assetsURL = "http://127.0.0.1:8000/assets";

friendoo.getAPI = async (api_route, api_token = null) => {
  try {
    const res = await axios(friendoo.baseURL + api_route, {
      headers: {
        Authorization: "Bearer " + api_token,
      },
    });
    return res;
  } catch (error) {
    return error.response.data.message;
  }
};

friendoo.postAPI = async (api_route, api_data, api_token = null) => {
  try {
    const res = await axios.post(friendoo.baseURL + api_route, api_data, {
      headers: {
        Authorization: "Bearer " + api_token,
      },
    });
    return res;
  } catch (error) {
    return error.response.data.message;
  }
};

// a function to change the time view
friendoo.timeChanger = (od) => {
  const date = new Date(od);

  const hours = date.getHours();

  const minute = date.getMinutes();
  const secound = date.getSeconds();

  const hou = hours < 10 ? "0" + hours : hours;
  const min = minute < 10 ? "0" + minute : minute;
  const sec = secound < 10 ? "0" + secound : secound;

  return hou + ":" + min + ":" + sec;
};
