const contactCardsContainer = (users) => {
  let usersHTML = "";
  users.map((user) => {
    usersHTML += contactCard(user);
  });
  return `
      <div class='contact-cards-container'>
          ${usersHTML}
      </div>`;
};
