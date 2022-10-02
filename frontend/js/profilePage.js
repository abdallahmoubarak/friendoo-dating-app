const profilePage = () => {
  return (
    `<div class='form'>
    <div class='profile-picture'>
        <img src='./assets/admin.png' alt=""/>
    </div><div class='input-section-container padding-top-bottom'>` +
    input("name", "Full Name") +
    input("email", "Email") +
    input("password", "Password") +
    "</div><button class='sign-btn'>Save</button></div>"
  );
};
