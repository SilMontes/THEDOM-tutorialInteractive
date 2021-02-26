let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newdiv = document.createElement("div");
	newdiv.innerHTML = "Hello World";
	newdiv.style.background = "yellow";
	document.body.appendChild(newdiv);
});
