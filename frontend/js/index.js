window.onload = async () => {
  document.getElementById("app-body").innerHTML = await usersPage();
  loopOverImgs();
};
