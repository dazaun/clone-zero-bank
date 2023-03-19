const clickWatcher = (event) => {
  // event.preventDefault();

  const elem = event.target
  const isClickForSubmit = elem.id == 'form-actions-submit'

  // console.log(isClickForSubmit)
  if(isClickForSubmit) {
    try{
      checkPassword()
    } catch (e) {
      console.error('Opss')
      console.error(e)
    }
  }
}

const openPage = () => {
  console.log(window.location)
  // const currentPath = document.URL.split('/')
  // const currentPage = currentPath[currentPath.length -1]
  // const isRedirect = 
  // ?q=url+дополн
  const isRedirect = window.location.search.length != 0
  const redirect = window.location.search.split('=')
  const redirectToPage = redirect[1]

  console.log("redirectToPage: "+ redirectToPage)
  console.log("isRedirect: "+ isRedirect)
  
  if(isRedirect) {
    window.location.href = redirectToPage
  } else {
     window.location.href = './pages/bank/account-summary.html'
  }
}

const checkPassword = () => {
  const usernamme = document.querySelector('#user_login').value
  const userPassword = document.querySelector('#user_password').value
  const erorMsgElem = document.querySelector("#login_form > div.alert.alert-error")

  const isCorrentAuthData = usernamme === 'username' && userPassword === 'password'
  if(isCorrentAuthData) {
    const token = document.querySelector('#user_token').value
    localStorage.setItem('token', token);
    return openPage()
  } else {
    document.querySelector('#user_login').value = ''
    document.querySelector('#user_password').value = ''
    localStorage.clear()
    erorMsgElem.hidden=false
    return
  }
}


document.addEventListener('click', clickWatcher)
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
     return checkPassword();
  }
});

document.querySelector('#login_form').addEventListener('submit', function(event) {
  event.preventDefault();
});
