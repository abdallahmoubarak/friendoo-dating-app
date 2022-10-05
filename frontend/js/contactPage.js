const contactPage = async () => {
  document.getElementById("app-body").innerHTML =
    "<div class='loading'><img src='./assets/loading.gif' alt='loading' /></div>";

  const contact = await friendoo.getAPI(
    "/users/all",
    localStorage.getItem("friendooJWT"),
  );

  return searchInput() + contactCardsContainer(contact.data.data);
};
