const contactPage = async () => {
  /************** Setting A Loader Before Loading The Page **************/
  appBody.innerHTML =
    "<div class='loading'><img src='./assets/loading.gif' alt='loading' /></div>";

  const users = await friendoo.getAPI(
    "/users/contacts/all",
    localStorage.getItem("friendooJWT"),
  );

  return searchInput() + contactCardsContainer(users.data.data);
};
