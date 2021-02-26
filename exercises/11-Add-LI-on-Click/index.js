let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elemento = document.createElement("li");
	elemento.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(elemento);
});
