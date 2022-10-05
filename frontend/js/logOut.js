const logOutBtn = document.getElementById("logout");

logOutBtn.onclick = () => {
  localStorage.removeItem("friendooJWT");
  window.location.replace("./sign.html");
};
