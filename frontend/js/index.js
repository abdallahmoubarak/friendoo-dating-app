window.onload = async () => {
  document.getElementById("app-body").innerHTML = await usersPage();
  await loopOverImgs();
  await loopOverIds();
};
