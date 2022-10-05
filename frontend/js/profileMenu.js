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

  // adding the new data of the user to be changed in data base

  document.getElementById("save-btn").onclick = async () => {
    let newState = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      bio: document.getElementById("bio").value,
      status: document.getElementById("status").value,
      interested_in: document.getElementById("interested").value,
      gender: document.getElementById("gender").value,
    };
    let res = await friendoo.postAPI(
      "/users/update_user",
      newState,
      localStorage.getItem("friendooJWT"),
    );
    res.data &&
      localStorage.setItem("friendooUser", JSON.stringify(res.data.data));

    currentUser = JSON.parse(localStorage.getItem("friendooUser"));
    document.getElementById("app-body").innerHTML = usersPage();
  };
};
