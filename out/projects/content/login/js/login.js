// Váriaveis botão de retornar ao Menu
let btnMain = document.getElementById("returnMain");

// Váriaveis de redirecionamento
let local = "../../index.html";

function loadPage() {
  alert("E-mail: teste@teste.com");
  alert("Password: testPassword");
}

function lgn() {
  let loginUsr = document.getElementById("eml").value;
  let pswdLogin = document.getElementById("pswd").value;

  let message = document.getElementById("messageText");

  if (loginUsr == "teste@teste.com" && pswdLogin == "testPassword") {
    message.innerHTML = "Conectando ao PortMar...";
    message.style.color = "white";
    message.style.background = "green";
    message.style.textAlign = "center";
    message.style.width = "100%";
    message.style.borderRadius = "10px";
    window.location.href = local;
  } else if (loginUsr == "" && pswdLogin == "") {
    message.innerHTML =
      "E-mail ou Senha não podem estar em branco, Tente novamente!";
    message.style.color = "white";
    message.style.background = "red";
    message.style.display = "flex";
    message.style.justifyContent = "center";
    message.style.alignItems = "center";
    message.style.textAlign = "center";
    message.style.width = "100%";
    message.style.height = "50px";
    message.style.borderRadius = "10px";
  } else if (loginUsr == "teste@teste.com" && pswdLogin == "") {
    message.innerHTML = "Senha não pode estar em branco, Tente novamente!";
    message.style.color = "white";
    message.style.background = "red";
    message.style.display = "flex";
    message.style.justifyContent = "center";
    message.style.alignItems = "center";
    message.style.textAlign = "center";
    message.style.height = "50px";
    message.style.width = "100%";
    message.style.borderRadius = "10px";
  } else if (loginUsr == "" && pswdLogin == "testPassword") {
    message.innerHTML = "E-mail não pode estar em branco, Tente novamente!";
    message.style.color = "white";
    message.style.background = "red";
    message.style.display = "flex";
    message.style.justifyContent = "center";
    message.style.alignItems = "center";
    message.style.textAlign = "center";
    message.style.width = "100%";
    message.style.height = "50px";
    message.style.borderRadius = "10px";
  } else {
    message.innerHTML = "E-mail e Senha não estão corretos, Tente novamente!";
    message.style.background = "red";
    message.style.color = "white";
    message.style.textAlign = "center";
    message.style.display = "flex";
    message.style.justifyContent = "center";
    message.style.alignItems = "center";
    message.style.textAlign = "center";
    message.style.width = "100%";
    message.style.height = "50px";
    message.style.borderRadius = "10px";
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

function backMain() {
  if (!onclick) {
    alert("Você está sendo direcionado de volta a pagina anterior.");
    window.location.href = local;
  } else {
    return;
  }
}
