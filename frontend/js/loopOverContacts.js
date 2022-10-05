const loopOverContacts = async () => {
  let contactCards = document.querySelectorAll(".contact-card");
  const interestedIn = await friendoo.getAPI(
    "/users/contacts/all",
    localStorage.getItem("friendooJWT"),
  );
  let users = interestedIn.data.data;
  contactCards.forEach((item) => {
    item.onclick = () => {
      let user = users.filter(
        (user) => user.id == item.id.split("card-")[1],
      )[0];
      document.getElementById("app-body").innerHTML = chatPage(user);
      list.forEach((item) => item.classList.remove("active"));
      document.getElementById("circule").classList.add("display-none");
      document.getElementById("circule-back").classList.add("display-none");

      document.getElementById("block").innerText = user.blocked
        ? "Unblock"
        : "Block";

      document.getElementById("block").onclick = async () => {
        friendoo.postAPI(
          "/users/block",
          { blocked_id: user.id },
          localStorage.getItem("friendooJWT"),
        );
        if (document.getElementById("block").innerText == "Block") {
          document.getElementById("block").innerText = "Unblock";
        } else {
          document.getElementById("block").innerText = "Block";
        }
      };
    };
  });
};
