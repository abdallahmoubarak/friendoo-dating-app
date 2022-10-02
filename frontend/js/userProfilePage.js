const userProfilePage = (user) => {
  return `
  <div class='user-profile-page'>
      <div class='user-profile-picture'>
        <img src='${user.img}' alt=''/>
      </div>
      <div>
        <div class='card-title'>
          ${user.name}
        </div>
        <div>Age: ${user.age}years</div>
        <div>Status: ${user.status}</div>
      </div>
    </div>`;
};
