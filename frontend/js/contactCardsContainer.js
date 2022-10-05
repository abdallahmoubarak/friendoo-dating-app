const contactCardsContainer = (users) => {
  /*************** Looping Over User's List And Returning A Component **************/
  let usersList = "";
  users.map((user) => {
    usersList += contactCard(user);
  });
  return `<div class='contact-cards-container'>
            ${usersList}
          </div>`;
};
