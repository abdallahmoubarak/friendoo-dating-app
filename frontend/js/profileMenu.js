const profileImg = document.getElementById("profile-img");
const menuBackground = document.getElementById("menu-background");
const profileMenu = document.getElementById("profile-menu");

profileImg.onclick = () => {
  menuBackground.classList.remove("display-none");
  profileMenu.classList.remove("display-none");
};

menuBackground.onclick = () => {
  menuBackground.classList.add("display-none");
  profileMenu.classList.add("display-none");
};
