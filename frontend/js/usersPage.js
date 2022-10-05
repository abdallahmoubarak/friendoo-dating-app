const usersPage = async () => {
  document.getElementById("app-body").innerHTML =
    "<div class='loading'><img src='./assets/loading.gif' alt='loading' /></div>";

  const users = await friendoo.getAPI(
    "/users/all",
    localStorage.getItem("friendooJWT"),
  );

  return searchInput() + userCardsContainer(users.data.data);
};
