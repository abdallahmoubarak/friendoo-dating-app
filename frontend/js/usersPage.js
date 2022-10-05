const usersPage = async () => {
  /************** Setting A Loader Before Loading The Page **************/
  appBody.innerHTML =
    "<div class='loading'><img src='./assets/loading.gif' alt='loading' /></div>";

  const users = await friendoo.getAPI(
    "/users/all",
    localStorage.getItem("friendooJWT"),
  );

  return searchInput() + userCardsContainer(users.data.data);
};
