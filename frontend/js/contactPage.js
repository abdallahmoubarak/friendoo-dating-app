const contactPage = async () => {
  document.getElementById("app-body").innerHTML =
    "<div class='loading'><img src='./assets/loading.gif' alt='loading' /></div>";

  const users = await friendoo.getAPI(
    "/users/contacts/all",
    localStorage.getItem("friendooJWT"),
  );

  return searchInput() + contactCardsContainer(users.data.data);
};
