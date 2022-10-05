const loopOverIds = async () => {
  let listeningUserCard = document.querySelectorAll(".card-like");

  listeningUserCard.forEach((item) => {
    item.onclick = async () => {
      friendoo.postAPI(
        "/users/like",
        { liked_id: item.id },
        localStorage.getItem("friendooJWT"),
      );
      item.children[0].src = "assets/active-heart-icon.svg";
    };
  });
};
