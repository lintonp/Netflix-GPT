export const validateSignInForm = (email, password) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;

  console.log(emailRegex.test(email));
  if (!emailRegex.test(email)) {
    return "Email Invalid";
  }
  if (!passwordRegex.test(password)) {
    return "Password Invalid";
  }

  return null;
};

export const validateSignUpForm = (name, email, password) => {
  const nameRegex = /^[A-Za-z\s\-']+$/;
  if (!nameRegex.test(name)) {
    return "Name Invalid";
  }
  return validateSignInForm(email, password);
};
