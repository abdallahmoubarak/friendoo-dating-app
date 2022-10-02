const regularExpression =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const validateSign = (type, name, mail, password) => {
  valid = true;
  if (
    type == "signup" &&
    (name.length < 5 ||
      !(
        mail.includes("@") &
        (mail.indexOf("@") > 2) &
        (mail.length - mail.indexOf("@") > 5)
      ) ||
      !regularExpression.test(password))
  ) {
    valid = false;
  } else if (
    (type == "signin" &&
      !(
        mail.includes("@") &
        (mail.indexOf("@") > 2) &
        (mail.length - mail.indexOf("@") > 5)
      )) ||
    !regularExpression.test(password)
  ) {
  }
  return valid;
};
