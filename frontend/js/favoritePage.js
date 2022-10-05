const favoritePage = async () => {
  document.getElementById("app-body").innerHTML =
    "<div class='loading'><img src='./assets/loading.gif' alt='loading' /></div>";

  const users = await friendoo.getAPI(
    "/users/favorites/all",
    localStorage.getItem("friendooJWT"),
  );

  return (
    searchInput() +
    userCardsContainer(users.data.data.filter((user) => user.favorite))
  );
};
