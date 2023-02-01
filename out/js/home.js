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

function page1() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.open(
        "https://drive.google.com/drive/folders/1atbr6iSrX7eJs4LR5mz4fE1p_EJgfQPM",
        "_blank"
      );
    }, 3000);
  }
}

function page2() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/login/login.html";
      s;
    }, 3000);
  }
}

function page3() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/signup/sign-up.html";
    }, 3000);
  }
}

function page4() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/rocketseat/habits/index.html";
    }, 3000);
  }
}

function page5() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/rocketseat/social-tree/index.html";
    }, 3000);
  }
}

function showLoading() {
  const divMain = document.getElementById("loadPages");

  const divLoader = document.createElement("div");
  divLoader.classList.add("loader", "centralize");

  const divLoad = document.createElement("div");
  divLoad.classList.add("loading");

  const h1 = document.createElement("h1");
  h1.classList.add("text-loader");
  h1.innerText = "loading...";

  divMain.appendChild(divLoader);
  divLoader.appendChild(divLoad);
  divLoader.appendChild(h1);

  setTimeout(() => hideLoading(), 3000);
}

function hideLoading() {
  const loadings = document.getElementsByClassName("loader");
  if (loadings.length) {
    loadings[0].remove();
  }
}