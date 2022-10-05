const regularExpression =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

/************** Sign Validation Function **************/
const validateSign = (signType, name, mail, password) => {
  valid = true;
  if (
    signType == "signup" &&
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
    (signType == "signin" &&
      !(
        mail.includes("@") &
        (mail.indexOf("@") > 2) &
        (mail.length - mail.indexOf("@") > 5)
      )) ||
    !regularExpression.test(password)
  ) {
    valid = false;
  }
  return valid;
};
