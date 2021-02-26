document.querySelector("#parentLI").childNodes;
let ul = document.getElementById("parentLI");
let liToDelete = ul.childNodes[3];
liToDelete.parentNode.removeChild(liToDelete);
