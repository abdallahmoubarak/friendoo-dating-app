let currentUser = JSON.parse(localStorage.getItem("friendooUser"));
const profilePage = (user = currentUser) => {
  return (
    `<div class='form'>
    <div class='profile-picture'>
        <img src='${friendoo.assetsURL}/admin.png' alt=""/>
    </div><div class='input-section-container padding-top-bottom'>` +
    input("name", "Full Name", user.name) +
    input("bio", "Bio", user.bio) +
    select(
      "status",
      "Status",
      ["Online", "Offline", "Incognito"],
      user.status,
    ) +
    select(
      "interested",
      "Interested",
      ["Male", "Female", "Both"],
      user.interested_in,
    ) +
    input("email", "Email", user.email) +
    input("password", "Password") +
    select("gender", "Gender", ["Male", "Female"], user.gender) +
    "</div><button class='sign-btn active-btn' id='save-btn'>Save</button></div>"
  );
};
