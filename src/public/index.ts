const init = () => {
  const loginFormSubmit = document.getElementsByClassName(
    'loginForm',
  ) as unknown as HTMLFormElement;
  const signUpForm = document.getElementsByClassName(
    'signpForm',
  ) as unknown as HTMLFormElement;
  const loginNavButton = document.getElementsByClassName(
    'btn-login',
  ) as unknown as HTMLButtonElement;
  const signUpNavButton = document.getElementsByClassName(
    'btm-signup',
  ) as unknown as HTMLButtonElement;

  loginFormSubmit.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
  });
  signUpForm.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
  });
  loginFormSubmit.addEventListener('click', (event) => {
    console.log(event);
    event.preventDefault();
  });
  loginFormSubmit.addEventListener('click', (event) => {
    console.log(event);
    event.preventDefault();
  });
  //
  //
};
//
document.addEventListener('DOMContentLoaded', init);

//
