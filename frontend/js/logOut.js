const logOutBtn = document.getElementById("logout");

logOutBtn.onclick = () => {
  localStorage.removeItem("friendooJWT");
  localStorage.removeItem("friendooUser");
  window.location.replace("./sign.html");
};
