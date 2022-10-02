const contactCardsContainer = (users) => {
  let usersHTML = "";
  users.map((u) => {
    usersHTML += contactCard(u.id, u.name, u.img, u.status);
  });
  return `
      <div class='contact-cards-container'>
          ${usersHTML}
      </div>`;
};
