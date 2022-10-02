const inputSection = document.getElementById("input-section-container");
const opsContainer = document.getElementById("form-operations");

inputSection.innerHTML =
  input("name", "Full Name") +
  input("email", "Email") +
  input("password", "Password");

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
    signBtn.innerText = "Sign Up";
    inputSection.innerHTML =
      input("name", "Full Name") +
      input("email", "Email") +
      input("password", "Password");
  }
};

// sign up process

// validating sign
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signMsg = document.getElementById("sign-msg");

// name input blur

nameInput.onblur = () => {
  if (nameInput.value.length < 5) {
    nameInput.classList.add("invalid-sign-input");
    signMsg.innerHTML = "Name is not valid";
  } else {
    nameInput.classList.remove("invalid-sign-input");
    signMsg.innerHTML = "";
  }
};

nameInput.addEventListener("input", () => {
  if (nameInput.value.length < 5) {
    signBtn.classList.remove("active-btn");
  } else {
    signMsg.innerHTML = "";
    if (
      validateSign(
        "signup",
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
    signMsg.innerHTML = "Email is not valid";
  } else {
    emailInput.classList.remove("invalid-sign-input");
    signMsg.innerHTML = "";
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
    signMsg.innerHTML = "";
    if (
      validateSign(
        "signup",
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
    signMsg.innerHTML =
      "Password should contain minimum 8 characters and minimum one number, one letter.";
  } else {
    passwordInput.classList.remove("invalid-sign-input");
    signMsg.innerHTML = "";
  }
};

// password input change

passwordInput.addEventListener("input", () => {
  if (!regularExpression.test(passwordInput.value)) {
    signBtn.classList.remove("active-btn");
  } else {
    signMsg.innerHTML = "";
    if (
      validateSign(
        "signup",
        nameInput.value,
        emailInput.value,
        passwordInput.value,
      )
    ) {
      signBtn.classList.add("active-btn");
    }
  }
});
