window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here}

	let mySelect = document.getElementById("mySelect");
	let selectValue = mySelect.value;
	let pais = 0;
	for (var i = 0; i < countries.length; i++) {
		pais = countries[i];
		mySelect.appendChild(pais);
	}
	mySelect.addEventListener("change", () => {
		alert(event.target.value);
	});
};
