const usersPage = async () => {
  document.getElementById("app-body").innerHTML =
    "<div class='loading'><img src='./assets/loading.gif' alt='loading' /></div>";

  const interestedIn = await friendoo.getAPI(
    "/users/all",
    localStorage.getItem("friendooJWT"),
  );

  return searchInput() + userCardsContainer(interestedIn.data.data);
};
