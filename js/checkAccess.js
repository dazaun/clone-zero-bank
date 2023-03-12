const authorizedPagesArr = ['account-activity.html', 'account-summary.html', 'money-map.html', 'online-statements.html', 'pay-bills.html', 'transfer-funds-verify.html', 'transfer-funds.html']

const showUserBlock = () => {
  const signInElem = document.querySelector('.signInElem')
  if(signInElem){
    signInElem.hidden = true
    document.querySelectorAll('.infoForLoggedUser').forEach(el => el.hidden = false)
  }
}

const showSignBlock = () => {
  document.querySelectorAll('.infoForLoggedUser').forEach(el => el.hidden = true)
  
  const signInElem = document.querySelector('.signInElem')
  signInElem.hidden = false
}


const checkAccess = () => {
  const token = localStorage.getItem('token');
  const isLogged = token === 'd9fe4ef5-c5e7-4d17-9a37-ea8d21c019a6'
  console.log('token '+token)
  console.log('isLogged '+isLogged)

  console.log(document.URL)
  const currentPath = document.URL.split('/')
  const currentPage = currentPath[currentPath.length -1]
  console.log(currentPage)
  const isAuthorizedPage = authorizedPagesArr.includes(currentPage)
  const isPublickPages = !isAuthorizedPage

  console.log( "isAuthorizedPage: "+ isAuthorizedPage )


  if( isLogged && isPublickPages) {
    // isLogged on public page => show block for logged user
    return showUserBlock()
  } else if(isLogged && isAuthorizedPage) {
    // isLogged on not public page => do nothing
    return
  } else if(!isLogged && isPublickPages) {
    // is not logged user on public page => hidden block for logged user, show auth button
    return showSignBlock()
  } else if(!isLogged && isAuthorizedPage) {
    // is not logged user on not public page => open login.html page

    // alert('Error: access not allowed')
    const page = window.location
    localStorage.clear();
    window.location.href = `../../login.html?redirectTo=${page}`;
    return
  }
}

checkAccess()