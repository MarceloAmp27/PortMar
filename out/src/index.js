function page1() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.open(
        "https://github.com/marceloamellopaixao/SystemSchool",
        "_blank"
      );
    }, 2500);
  }
}

function page2() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/content/login/login.html";
    }, 2500);
  }
}

function page3() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/content/signup/sign-up.html";
    }, 2500);
  }
}

function page4() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/content/rocketseat/habits/index.html";
    }, 2500);
  }
}

function seeMore() {
  if (!onclick) {
    showLoading();
    setTimeout(function () {
      window.location.href = "./projects/index.html";
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