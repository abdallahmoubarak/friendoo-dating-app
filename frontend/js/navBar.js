const navBar = () => {
  return `
    <div class="nav-container">
      <ul class="nav-ul">
        <li class="nav-li active">
          <div class="nav-icon">
            <img src="./assets/white-heart-icon.svg" />
          </div>
          <span class="nav-text">Favorites</span>
        </li>
        <li class="nav-li">
          <div class="nav-icon">
            <img src="./assets/white-user-icon.svg" />
          </div>
          <span class="nav-text">Users</span>
        </li>
        <li class="nav-li">
          <div class="nav-icon">
            <img src="./assets/white-chat-icon.svg" />
          </div>
          <span class="nav-text">Chats</span>
        </li>
        <div class="circule"></div>
      </ul>
    </div>`;
};

document.getElementById("nav-bar").innerHTML = navBar();

const list = document.querySelectorAll(".nav-li");

list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
