function page1() {
    if (!onclick) {
      showLoading();
      setTimeout(function () {
        window.open(
          "https://github.com/marceloamellopaixao/SystemSchool",
          "_blank"
        );
      }, 2800);
    }
  }
  
  function page2() {
    if (!onclick) {
      showLoading();
      setTimeout(function () {
        window.location.href = "./content/login/login.html";
      }, 2800);
    }
  }
  
  function page3() {
    if (!onclick) {
      showLoading();
      setTimeout(function () {
        window.location.href = "./content/signup/sign-up.html";
      }, 2800);
    }
  }
  
  function page4() {
    if (!onclick) {
      showLoading();
      setTimeout(function () {
        window.location.href = "./content/rocketseat/habits/index.html";
      }, 2800);
    }
  }
  
  function page5() {
    if (!onclick) {
      showLoading();
      setTimeout(function () {
        window.location.href =
          "./content/rocketseat/social-tree/index.html";
      }, 2800);
    }
  }
  
  function page6() {
    if (!onclick) {
      showLoading();
      setTimeout(function () {
        window.location.href = "./content/alura/pong-js/index.html";
      }, 2800);
    }
  }

  function page7() {
    if (!onclick) {
      showLoading();
      setTimeout(function () {
        window.location.href = "./content/alura/freeway-js/index.html";
      }, 2800);
    }
  }
  
  function showLoading() {
    const bodyPage = document.body;
    //const ulPage = document.getElementById("menu-h");
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
  
    //ulPage.style.position = "unset";
    bodyPage.style.overflow = "hidden";
  
    setTimeout(() => hideLoading(), 3000);
  }
  
  function hideLoading() {
    //const ulPage = document.getElementById("menu-h");
    const bodyPage = document.body;
    //ulPage.style.position = "none";
    bodyPage.style.overflow = "visible";
  
    const loadings = document.getElementsByClassName("loader");
    if (loadings.length) {
      loadings[0].remove();
    } else {
      return;
    }
  }