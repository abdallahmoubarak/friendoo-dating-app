const contactPage = async () => {
  const contact = await friendoo.getAPI(
    "/users/all",
    localStorage.getItem("friendooJWT"),
  );
  return searchInput() + contactCardsContainer(contact.data.data);
};
