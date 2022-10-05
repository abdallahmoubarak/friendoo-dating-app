const userCardsContainer = (users) => {
  /*************** Looping Over User's List And Returning A Component **************/
  let usersList = "";
  users.map((user) => {
    usersList += userCard(user);
  });
  return `<div class='user-cards-container'>
            ${usersList}
          </div>`;
};
