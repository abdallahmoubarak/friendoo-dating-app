const favoriteBtn = document.getElementById("favorite");
const usersBtn = document.getElementById("users");
const contactBtn = document.getElementById("contact");

/************** Handle Clicking On Nav Bar Items **************/

favoriteBtn.onclick = async () => {
  document.getElementById("circule").classList.remove("display-none");
  document.getElementById("circule-back").classList.remove("display-none");
  appBody.innerHTML = await favoritePage();
  await loopOverImgs();
  await loopOverIds();
};

usersBtn.onclick = async () => {
  document.getElementById("circule").classList.remove("display-none");
  document.getElementById("circule-back").classList.remove("display-none");
  appBody.innerHTML = await usersPage();
  await loopOverImgs();
  await loopOverIds();
};

contactBtn.onclick = async () => {
  document.getElementById("circule").classList.remove("display-none");
  document.getElementById("circule-back").classList.remove("display-none");
  appBody.innerHTML = await contactPage();
  await loopOverContacts();
};

/************** Handle First Time Loading The App **************/

window.onload = async () => {
  appBody.innerHTML = await usersPage();
  await loopOverImgs();
  await loopOverIds();
};
