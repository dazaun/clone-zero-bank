const clickkWatcher = (event) => {
  // event.preventDefault();

  const elem = event.target
  const isClickForSubmit = elem.id == 'form-actions-submit'

  console.log(isClickForSubmit)
  if(isClickForSubmit) {
    try{
      checkPassword()
  
      // localStorage.setItem('username', 'username');
      // localStorage.setItem('password', 'password');
  
      // const cat = localStorage.getItem('myCat');
      // localStorage.clear();

    } catch (e) {
      console.error('Opss')
      console.error(e)
    }
  }
}

const checkPassword = () => {
  const usernamme = document.querySelector('#user_login').value
  const userPassword = document.querySelector('#user_password').value
  
  if(usernamme === 'username' && userPassword === 'password') {
    const token = document.querySelector('#user_token').value
    console.log('Win')
    localStorage.setItem('token', token);
    window.location.href = "./pages/bank/account-summary.html";
  } else {
    document.querySelector('#user_login').value = ''
    document.querySelector('#user_password').value = ''
    localStorage.clear()
    alert('Error: User not found.')
    return
  }
}


document.addEventListener('click', clickkWatcher)
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
     return checkPassword();
  }
});

document.querySelector('#login_form').addEventListener('submit', function(event) {
  event.preventDefault();
});
