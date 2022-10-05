const navBar = () => {
  return `<div class="nav-container">
    <ul class="nav-ul">
      <li class="nav-li" id='favorite'>
        <div class="nav-icon">
          <img src="./assets/white-heart-icon.svg" />
        </div>
        <span class="nav-text">Favorites</span>
      </li>
      <li class="nav-li  active" id='users'>
        <div class="nav-icon" >
          <img src="./assets/white-user-icon.svg" />
        </div>
        <span class="nav-text">Users</span>
      </li>
      <li class="nav-li" id='contact'>
        <div class="nav-icon">
          <img src="./assets/white-chat-icon.svg" />
        </div>
        <span class="nav-text">Chats</span>
      </li>
      <div class="circule-back" id='circule-back'></div>
      <div class="circule" id='circule'></div>
    </ul>
  </div>`;
};

/************** Setting Nav Bar **************/

navBarId.innerHTML = navBar();
const list = document.querySelectorAll(".nav-li");

/************** Activating Item In Nav Bar **************/

list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
