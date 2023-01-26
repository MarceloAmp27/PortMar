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
  window.location.href =
    "https://drive.google.com/drive/folders/1atbr6iSrX7eJs4LR5mz4fE1p_EJgfQPM";
}

function page2() {
  window.location.href = "./projects/login/login.html";
}

function page3() {
  window.location.href = "./projects/signup/sign-up.html";
}

function page4() {
  window.location.href = "./projects/rocketseat/habits/index.html";
}

function page5() {
  window.location.href = "./projects/rocketseat/social-tree/index.html";
}