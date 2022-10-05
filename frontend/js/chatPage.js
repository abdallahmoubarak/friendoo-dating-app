const chatPage = (user) => {
  return `
    <div class='chat-page'>
      <div class='chat-head'>
        <div class='profile-img'>
          <img src='${
            friendoo.assetsURL + (user.profile_img || "/default.png")
          }' alt=''/>
        </div>
        <div class='chat-info'>
          <div>
            <div class='card-title'>
              ${user.name}
            </div>
            <div>
              Status: 
              <span class='${user.status == "online" ? "green" : "gray"}'>
              ${user.status}</span>
            </div>
          </div>
          <div class='pointer' id='block'>
            Block
          </div>
        </div>
      </div>
      <div class='chat-body' id='chat-body'></div>
      <div class='chat-input-container'>
        <input class='chat-input' placeholder='Message' />
        <img src='./assets/send-icon.svg' alt='' id='send-msg'/>
      </div>
    </div>`;
};
