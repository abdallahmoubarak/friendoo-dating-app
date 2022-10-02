const profilePage = () => {
  return (
    `<div class='form'>
    <div class='profile-picture'>
        <img src='./assets/admin.png' alt=""/>
    </div><div class='input-section-container padding-top-bottom'>` +
    input("name", "Full Name") +
    input("bio", "Bio") +
    select("status", "Status", ["Online", "Offline", "Incognito"]) +
    select("interested", "Interested", ["Male", "Female", "Both"]) +
    input("email", "Email") +
    input("password", "Password") +
    select("gender", "Gender", ["Male", "Female"]) +
    "</div><button class='sign-btn'>Save</button></div>"
  );
};
