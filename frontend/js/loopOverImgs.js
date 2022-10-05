const loopOverImgs = async () => {
  const interestedIn = await friendoo.getAPI(
    "/users/contacts/all",
    localStorage.getItem("friendooJWT"),
  );

  /************** Selecting Users' Card To Handle On Click **************/

  let users = interestedIn.data.data;
  let userCards = document.querySelectorAll(".card-img");

  userCards.forEach((item) => {
    item.onclick = () => {
      appBody.innerHTML = userProfilePage(
        users.filter((user) => user.id == item.id.split("card-")[1])[0],
      );

      /************** Deactivating Nav Bar **************/
      list.forEach((item) => item.classList.remove("active"));
      document.getElementById("circule").classList.add("display-none");
      document.getElementById("circule-back").classList.add("display-none");
    };
  });
};
