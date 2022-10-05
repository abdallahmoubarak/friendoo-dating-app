const loopOverContacts = async () => {
  let listeningUserCard = document.querySelectorAll(".contact-card");
  const interestedIn = await friendoo.getAPI(
    "/users/all",
    localStorage.getItem("friendooJWT"),
  );
  let users = interestedIn.data.data;
  listeningUserCard.forEach((item) => {
    item.addEventListener("click", () => {
      document.getElementById("app-body").innerHTML = chatPage(
        users.filter((user) => user.id == item.id.split("card-")[1])[0],
      );
      list.forEach((item) => item.classList.remove("active"));
      document.getElementById("circule").classList.add("display-none");
      document.getElementById("circule-back").classList.add("display-none");
    });
  });
};
