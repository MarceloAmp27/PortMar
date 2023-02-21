let local = "../index.html";

let btnMain = document.getElementById("returnMain");
btnMain.addEventListener("click", backMain);

function backMain() {
  if (!onclick) {
    alert("Você está sendo direcionado de volta ao Menu");
    location.href = local;
  } else {
    return;
  }
}
