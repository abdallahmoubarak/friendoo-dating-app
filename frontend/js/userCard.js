const userCard = (id, name, img, status) => {
  return `
    <div class='user-card'>
        <div class='card-img'>
            <img src=${img} alt=""/>
        </div>
        <div class='card-body'>
            <div class='card-text'>
                <div class='card-title'>${name}</div>
                <div>Status: <span class='green'>${status}</span></div>
                <div>Distance: 3.2km</div>
            </div>
            <div class='card-like' id='${id}'>
                <img src='./assets/unactive-heart-icon.svg' alt='' />
            </div>
        </div>
    </div>`;
};
