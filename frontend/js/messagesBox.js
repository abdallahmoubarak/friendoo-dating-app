const messageBox = async (uid) => {
  /************** Get Messages From The Server **************/
  const msgs = await friendoo.getAPI(
    `/messages/all/${uid}`,
    localStorage.getItem("friendooJWT"),
  );

  /************** Generate A Rendered View From Received Msgs **************/
  let messages = "";
  msgs.data.map(
    (msg) =>
      (messages += `<div
      class='msg-container ${
        msg.sender_id != JSON.parse(localStorage.getItem("friendooUser")).id ||
        "me"
      }'
    >
      ${msg.content}
      <div class="msg-time">${friendoo.timeChanger(msg.created_at)}</div>
    </div>`),
  );

  return messages;
};
