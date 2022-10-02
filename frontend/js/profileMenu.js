const profileImg = document.getElementById("profile-img");
const menuBackground = document.getElementById("menu-background");
const profileMenu = document.getElementById("profile-menu");
const profileBtn = document.getElementById("profile-btn");

profileImg.onclick = () => {
  menuBackground.classList.remove("display-none");
  profileMenu.classList.remove("display-none");
};

menuBackground.onclick = () => {
  menuBackground.classList.add("display-none");
  profileMenu.classList.add("display-none");
};

profileMenu.onclick = () => {
  menuBackground.classList.add("display-none");
  profileMenu.classList.add("display-none");
  document.getElementById("app-body").innerHTML = profilePage();

  list.forEach((item) => item.classList.remove("active"));
  document.getElementById("circule").classList.add("display-none");
  document.getElementById("circule-back").classList.add("display-none");
};
