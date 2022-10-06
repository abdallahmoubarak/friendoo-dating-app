const userCard = (user) => {
  return `
    <div class='user-card'>
        <div class='card-img' id="card-${user.id}">
            <img src='${
              friendoo.assetsURL + `/${user.picture_url || "default.png"}`
            }' alt=""/>
        </div>
        <div class='card-body'>
            <div class='card-text'>
                <div class='card-title'>${user.name}</div>
                <div>
                    Status: <span class='${
                      user.status == "online" ? "green" : "gray"
                    }'>${user.status}</span>
                </div>
                <div>Distance: ${getDistance(user.lat, user.longt)}km</div>
            </div>
            <div class='card-like' id='${user.id}'>
                <img src='
                ${
                  user.favorite
                    ? "./assets/active-heart-icon.svg"
                    : "./assets/unactive-heart-icon.svg"
                }
                ' alt='' />
            </div>
        </div>
    </div>`;
};
