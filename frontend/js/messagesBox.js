let currentUser = JSON.parse(localStorage.getItem("friendooUser"));

const messageBox = () => {
  let messages = "";
  defaultMsgs.map(
    (msg) =>
      (messages += `<div
      class='msg-container ${msg.sender_id != currentUser.id || "me"}'
    >
      ${msg.content}
      <div class="msg-time">${friendoo.timeChanger(msg.created_at)}</div>
    </div>`),
  );

  return messages;
};
