const favoritePage = () => {
  return (
    searchInput() + userCardsContainer(users.filter((user) => user.favorite))
  );
};
