/* Alert initial */
function alertMsg() {
  alert("Bem vindo ao PortMar ");
  iddCnfm = confirm("Você é maior que 14 Anos?");

  if (iddCnfm == true) {
    alert("Você está sendo direcionado para a página.");
  } else {
    alert("Você não pode entrar nesta página!");
    window.location.href = "./projects/login/login.html";
  }
}