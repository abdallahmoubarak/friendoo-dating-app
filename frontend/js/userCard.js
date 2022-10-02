const userCard = (id, name, img, status, favorite) => {
  return `
    <div class='user-card'>
        <div class='card-img' id="card-${id}">
            <img src=${img} alt=""/>
        </div>
        <div class='card-body'>
            <div class='card-text'>
                <div class='card-title'>${name}</div>
                <div>
                    Status: <span class='${
                      status == "online" ? "green" : "gray"
                    }'>${status}</span>
                </div>
                <div>Distance: 3.2km</div>
            </div>
            <div class='card-like' id='${id}'>
                <img src='${
                  favorite
                    ? "./assets/active-heart-icon.svg"
                    : "./assets/unactive-heart-icon.svg"
                }' alt='' />
            </div>
        </div>
    </div>`;
};
