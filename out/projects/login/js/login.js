function pageLoaded() {
  alert("Olá, bem vindo a página de Login, utilize os dados a seguir.")
}

function lgn() {
  let loginUsr = document.getElementById("eml").value;
  let pswdLogin = document.getElementById("pswd").value;
  let message = document.getElementById("messageText");
  const auth = firebase.auth();
  const database = firebase.database();

  // Validate input fields
  if (vldEml(loginUsr) == false || vldPswd(pswdLogin) == false) {
    alert("E-mail ou Senha estão inválidos ou não preenchidos.");
    return; // Don't continue running code
  }

  auth
    .signInWithEmailAndPassword(loginUsr, pswdLogin)
    .then(function () {
      // Declare user variable
      let user = auth.currentUser;

      // Add this user to Firebase Database
      let dbRf = database.ref();

      // User Data
      let usrDt = {
        lastLgn: Date.now()
      };

      dbRf.child("users/" + user.uid).update(usrDt);

      alert("User Logged In!!");
      message.innerHTML = "success", response;
      location.href = "../index.html";
    })
      .catch(function (error) {
        // Firebase will use this to alert of it's errors
        let errorCode = error.code;
        let errorMessage = error.message;

        alert(errorMessage);
      });
}

function vldEml(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/; // Validate the email address
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function vldPswd(pswdInsrt) {
  // Validate password
  if (pswdInsrt < 6) {
    return false;
  } else {
    return true;
  }
}

function vldFld(field) {
  // Validate the fields
  if (field == null) {
    return false;
  }
  if (field.length < 0) {
    return false;
  } else {
    return true;
  }
}

eyeBtn.onclick = function () {
  let pswdLogin = document.getElementById("pswd");
  let buttonEye = document.getElementById("eyeBtn");

  if (pswdLogin.type === "password") {
    pswdLogin.setAttribute("type", "text");
    buttonEye.classList.add("hdPwdLgn");
  } else {
    pswdLogin.setAttribute("type", "password");
    buttonEye.classList.remove("hdPwdLgn");
  }
};

// function createAccount() {} // FAZER MELHORIA NESSA VALIDAÇÃO.
// let create = document.getElementById("signUp");

// if (create == true) {
//  alert("Conectando-se á página de Cadastro");
// } else {
//  alert("Tente novamente ou recarregue a página.");
//  window.location.reload(true);
// }
