const contactCard = (id, name, img, status) => {
  return `
      <div class='contact-card' id='${id}'>
          <div class='contact-img'>
              <img src=${img} alt=""/>
          </div>
          <div class='contact-body'>
              <div class='card-text'>
                  <div class='card-title'>${name}</div>
                  <div>
                    Status: <span class='${
                      status == "online" ? "green" : "gray"
                    }'>${status}</span>
                  </div>
                  <div>Distance: 3.2km</div>
              </div>
              <div>
                  12:00PM
              </div>
          </div>
      </div>`;
};
