/* Alert initial */
function alertMsg() {
  alert("Bem vindo ao PortMar ");
  iddCnfm = confirm("Você é maior de 14 Anos?");

  if (iddCnfm == true) {
    alert("Você está sendo direcionado para a página.");
  } else {
    alert("Você não pode entrar nesta página!");
    window.location.href = "../html/login.html";
  }
}

function page1() {
  window.location.href = "../html/login.html";
}

function page2() {
  window.location.href = "../html/sign-up.html";
}

function page3() {
  window.location.href = "../projects/nlw-setup/index.html";
}
