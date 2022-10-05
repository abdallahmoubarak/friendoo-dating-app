const favoritePage = async () => {
  const interestedIn = await friendoo.getAPI(
    "/users/all",
    localStorage.getItem("friendooJWT"),
  );
  return (
    searchInput() +
    userCardsContainer(interestedIn.data.data.filter((user) => user.favorite))
  );
};
