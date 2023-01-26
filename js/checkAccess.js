const checkAccess = () => {
  const token = localStorage.getItem('token');
  const isLogged = token === 'd9fe4ef5-c5e7-4d17-9a37-ea8d21c019a6'
  console.log('token '+token)
  console.log('isLogged '+isLogged)
  console.log()

  if(!isLogged) {
    alert('Error: access not allowed')
    localStorage.clear();
    window.location.href = "https://clone-zero-bank.netlify.app/login.html";
  }

}

checkAccess()