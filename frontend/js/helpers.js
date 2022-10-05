const friendoo = {};

friendoo.baseURL = "http://127.0.0.1:8000/api/v0.1";
friendoo.assetsURL = "http://127.0.0.1:8000/assets";

/************** A Re-useable Function That Used Get Method For API's **************/

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

/************** A Re-useable Function That Used Post Method For API's **************/

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

/************** Updating User Location **************/

friendoo.updateLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      friendoo.postAPI(
        "/location/update",
        { lat: position.coords.latitude, long: position.coords.longitude },
        localStorage.getItem("friendooJWT"),
      );
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

/************** Changes The Way To View Time **************/

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
