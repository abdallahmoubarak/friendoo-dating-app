const inputSection = document.getElementById("input-section-container");
const opsContainer = document.getElementById("form-operations");

inputSection.innerHTML =
  input("name", "Full Name") +
  input("username", "User Name") +
  input("email", "Email");

opsContainer.innerHTML = formOps();

//   switch between sign in sign up page

const switchSign = document.getElementById("switch-sign");
const signBtn = document.getElementById("sign-btn");

switchSign.onclick = () => {
  if (switchSign.innerText == "I already have an account") {
    switchSign.innerText = "I don't have an account";
    signBtn.innerText = "Sign In";
    inputSection.innerHTML =
      input("email", "Email") + input("password", "Password");
  } else {
    switchSign.innerText = "I already have an account";
    signBtn.innerText = "Next";
    inputSection.innerHTML =
      input("name", "Full Name") +
      input("username", "User Name") +
      input("email", "Email");
  }
};

// sign up process
