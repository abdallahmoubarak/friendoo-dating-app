const userCardsContainer = (users) => {
  let usersHTML = "";
  users.map((u) => {
    usersHTML += userCard(u.id, u.name, u.img, u.status, u.long, u.lat);
  });
  return `
    <div class='user-cards-container'>
        ${usersHTML}
    </div>`;
};
