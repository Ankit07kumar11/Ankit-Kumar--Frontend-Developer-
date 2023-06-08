function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  alert("Item dropped to div2 successfully");
}

function resetContainers() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  var items = div2.querySelectorAll("img, p,h1,a,span,div");

  for (var i = 0; i < items.length; i++) {
    div1.appendChild(items[i]);
  }
}
