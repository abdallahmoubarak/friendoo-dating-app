const userCardsContainer = (users) => {
  let usersHTML = "";
  users.map((user) => {
    usersHTML += userCard(user);
  });
  return `
    <div class='user-cards-container'>
        ${usersHTML}
    </div>`;
};
