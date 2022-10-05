const friendoo = {};

friendoo.baseURL = "http://127.0.0.1:8000/api/v0.1";
friendoo.assetsURL = "http://127.0.0.1:8000/assets";

/************** A re-useable function that used get method for API's **************/

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

/************** A re-useable function that used post method for API's **************/

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

/************** A function to update the location of the user **************/

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

/************** A function to change the time view **************/

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

/************** first things first **************/

if (
  !localStorage.getItem("friendooJWT") ||
  !localStorage.getItem("friendooUser")
) {
  window.location.replace("/sign.html");
}

/************** update user's location **************/

friendoo.updateLocation();

/************** main consts **************/

const appBody = document.getElementById("app-body");
