const userProfilePage = (user) => {
  return `
  <div class='user-profile-page'>
      <div class='user-profile-picture'>
        <img src='${
          friendoo.assetsURL + (user.profile_img || "/default.png")
        }' alt=''/>
      </div>
      <div class='user-profile-info'>
        <div class='card-title'>
          ${user.name}
        </div>
        <div>
          <span class='secondary-color'>Age:</span>
          ${user.age}years
        </div>
        <div>
          <span class='secondary-color'>Status: </span>
          <span class='${user.status == "online" ? "green" : "gray"}'>
          ${user.status}</span>
        </div>
        <div>
          <span class='secondary-color'>Bio: </span>
          ${user.bio}
        </div>
        <div>
          <span class='secondary-color'>Interested in: </span>
          ${user.interested_in}
        </div>
        <div>
          <span class='secondary-color'>Distance: </span>
          3.2km
        </div>
      </div>
    </div>`;
};
