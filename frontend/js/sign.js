const inputSection = document.getElementById("input-section-container");
const opsContainer = document.getElementById("form-operations");

//  setting up the initial page

inputSection.innerHTML =
  input("name", "Full Name") +
  input("email", "Email") +
  input("password", "Password");

opsContainer.innerHTML = formOps();

// needed ids after setting up the page

const switchSign = document.getElementById("switch-sign");
const signBtn = document.getElementById("sign-btn");
const nameInputContainer = document.getElementById("name-container");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signMsg = document.getElementById("sign-msg");
let signType = "signup";

// switcher between sign in sign up page

switchSign.onclick = () => {
  if (switchSign.innerText == "I already have an account") {
    switchSign.innerText = "I don't have an account";
    signBtn.innerText = "Sign In";
    nameInputContainer.classList.add("display-none");
    signMsg.innerText = "";
    signType = "signin";
  } else {
    switchSign.innerText = "I already have an account";
    signBtn.innerText = "Sign Up";
    signBtn.classList.remove("active-btn");
    nameInputContainer.classList.remove("display-none");
    signMsg.innerText = "";
    signType = "signup";
  }
};

// sign process: validating sign

// name input blur

nameInput.onblur = () => {
  if (nameInput.value.length < 5) {
    nameInput.classList.add("invalid-sign-input");
    signMsg.innerText = "Name is not valid";
  } else {
    nameInput.classList.remove("invalid-sign-input");
    signMsg.innerText = "";
  }
};

nameInput.addEventListener("input", () => {
  if (nameInput.value.length < 5) {
    signBtn.classList.remove("active-btn");
  } else {
    signMsg.innerText = "";
    if (
      validateSign(
        signType,
        nameInput.value,
        emailInput.value,
        passwordInput.value,
      )
    ) {
      signBtn.classList.add("active-btn");
    }
  }
});

// email input blur

emailInput.onblur = () => {
  if (
    !(
      emailInput.value.includes("@") &
      (emailInput.value.indexOf("@") > 2) &
      (emailInput.value.length - emailInput.value.indexOf("@") > 5)
    )
  ) {
    emailInput.classList.add("invalid-sign-input");
    signMsg.innerText = "Email is not valid";
  } else {
    emailInput.classList.remove("invalid-sign-input");
    signMsg.innerText = "";
  }
};

// email input change

emailInput.addEventListener("input", () => {
  if (
    !(
      emailInput.value.includes("@") &
      (emailInput.value.indexOf("@") > 2) &
      (emailInput.value.length - emailInput.value.indexOf("@") > 5)
    )
  ) {
    signBtn.classList.remove("active-btn");
  } else {
    signMsg.innerText = "";
    if (
      validateSign(
        signType,
        nameInput.value,
        emailInput.value,
        passwordInput.value,
      )
    ) {
      signBtn.classList.add("active-btn");
    }
  }
});

// password input blur

passwordInput.onblur = () => {
  if (!regularExpression.test(passwordInput.value)) {
    passwordInput.classList.add("invalid-sign-input");
    signMsg.innerText =
      "Password should contain minimum 8 characters and minimum one number, one letter.";
  } else {
    passwordInput.classList.remove("invalid-sign-input");
    signMsg.innerText = "";
  }
};

// password input change

passwordInput.addEventListener("input", () => {
  if (!regularExpression.test(passwordInput.value)) {
    signBtn.classList.remove("active-btn");
  } else {
    signMsg.innerText = "";
    if (
      validateSign(
        signType,
        nameInput.value,
        emailInput.value,
        passwordInput.value,
      )
    ) {
      signBtn.classList.add("active-btn");
    }
  }
});

// sign process: clicking button
signBtn.onclick = () => {
  if (signType == "signup") {
    window.location.replace("./index.html");
  } else if (signType == "signin") {
    window.location.replace("./index.html");
  }
};
