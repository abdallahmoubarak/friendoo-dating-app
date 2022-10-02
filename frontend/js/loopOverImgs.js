const loopOverImgs = () => {
  let listeningUserCard = document.querySelectorAll(".card-img");

  listeningUserCard.forEach((item) => {
    item.addEventListener("click", () => {
      document.getElementById("app-body").innerHTML = userProfilePage(
        users.filter((user) => user.id == item.id.split("card-")[1])[0],
      );
    });
  });
};
