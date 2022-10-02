const chatPage = (user) => {
  return `
    <div class='chat-page'>
      <div class='chat-head'>
        <div class='profile-img'>
          <img src='${user.img}' alt=''/>
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
          <div>
            Block
          </div>
        </div>
      </div>
      <div class='chat-body' id='chat-body'></div>
      <input class='chat-input' placeholder='Message' />
    </div>`;
};
