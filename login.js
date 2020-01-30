function validateLogin() {
    var un = document.loginform.email.value;
    var pw = document.loginform.password.value;
    user = "test@test.com"
    pswd = "1234"
   if (un == user && pw == pswd){
        return true;

   }
    else {
        alert ("Datos incorrectos");
        return false;
    }
}
function recoverPassword() {
    var un = document.recoverpswd.email.value;
   if (un != ""){
    alert ("El correo ha sido enviado");
    return false;
   }
    else {
        alert ("Los campos no pueden estar vacios");
        return false;
    }
}

function recover() {
    var x = document.getElementById("recover");
    var y = document.getElementById("loginf")
    if (x.classList.contains("d-none") ){
        x.classList.add('d-flex');
        y.classList.add('d-none');
        y.classList.remove('d-flex');

    } else {
        x.classList.add('d-none');
        y.classList.remove('d-flex');
    }
  }