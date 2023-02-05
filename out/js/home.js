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
    }, 2800);
  }
}

function page2() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/login/login.html";
    }, 2800);
  }
}

function page3() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/signup/sign-up.html";
    }, 2800);
  }
}

function page4() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/rocketseat/habits/index.html";
    }, 2800);
  }
}

function page5() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/rocketseat/social-tree/index.html";
    }, 2800);
  }
}

function page6() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/alura/pong-js/index.html";
    }, 2800);
  }
}

function showLoading() {
  const bodyPage = document.body;
  const ulPage = document.getElementById("menu-ul");
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

  ulPage.style.position = "unset";
  bodyPage.style.overflow = "hidden";

  setTimeout(() => hideLoading(), 3000);
}

function hideLoading() {
  const ulPage = document.getElementById("menu-ul");
  const bodyPage = document.body;
  ulPage.style.position = "fixed";
  bodyPage.style.overflow = "visible";

  const loadings = document.getElementsByClassName("loader");
  if (loadings.length) {
    loadings[0].remove();
  } else {
    return;
  }
}
