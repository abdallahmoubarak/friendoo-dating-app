const loopOverIds = async () => {
  let likeBtn = document.querySelectorAll(".card-like");

  likeBtn.forEach((item) => {
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
