const contactCard = (user) => {
  return `
      <div class='contact-card' id='card-${user.id}'>
          <div class='contact-img'>
              <img src='${
                friendoo.assetsURL + (user.profile_img || "/default.png")
              }' alt=""/>
          </div>
          <div class='contact-body'>
              <div class='card-text'>
                  <div class='card-title'>${user.name}</div>
                  <div>
                    Status: <span class='${
                      user.status == "online" ? "green" : "gray"
                    }'>${user.status}</span>
                  </div>
                  <div>Distance: 3.2km</div>
              </div>
              <div>
                  12:00PM
              </div>
          </div>
      </div>`;
};
