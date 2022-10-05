const loopOverContacts = async () => {
  let contactCards = document.querySelectorAll(".contact-card");
  const interestedIn = await friendoo.getAPI(
    "/users/contacts/all",
    localStorage.getItem("friendooJWT"),
  );

  let users = interestedIn.data.data;

  contactCards.forEach((item) => {
    item.onclick = async () => {
      let user = users.filter(
        (element) => element.id == item.id.split("card-")[1],
      )[0];

      appBody.innerHTML = chatPage(user, await messageBox(user.id));

      /************** Deactivating Nav Bar **************/
      list.forEach((item) => item.classList.remove("active"));
      document.getElementById("circule").classList.add("display-none");
      document.getElementById("circule-back").classList.add("display-none");

      /************** Handle Sending Message **************/
      document.getElementById("send-msg").onclick = async () => {
        const chatInput = document.getElementById("chat-input");
        if (chatInput.value) {
          friendoo.postAPI(
            "/messages/send",
            { content: chatInput.value, reciever_id: user.id },
            localStorage.getItem("friendooJWT"),
          );
          chatInput.value = "";
          document.getElementById("chat-body").innerHTML = await messageBox(
            user.id,
          );
        }
      };

      document.getElementById("block").onclick = async () => {
        friendoo.postAPI(
          "/users/block",
          { blocked_id: user.id },
          localStorage.getItem("friendooJWT"),
        );
      };
    };
  });
};
