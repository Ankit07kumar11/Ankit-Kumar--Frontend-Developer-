function allowDrop(ev) {
  ev.preventDefault();
}

// to drag any element from 1st container
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// function to drop attributes from 1st container to 2nd container
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  alert("Item dropped to div2 successfully");
}

// function to reset content of 2nd container by appending them back to container 1.
function resetContainers() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  var items = div2.querySelectorAll("img, p,h1,a,span,div");

  for (var i = 0; i < items.length; i++) {
    div1.appendChild(items[i]);
  }
}
