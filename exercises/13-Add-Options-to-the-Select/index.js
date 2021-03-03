window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here}

	 let mySelect = document.querySelector("#mySelect");

	for (var i = 0; i < countries.length; i++) {
		let newOption = document.createElement("option");
		newOption.value = countries[i];
		newOption.innerHTML = countries[i];
		mySelect.appendChild(newOption);
	}
	mySelect.addEventListener("change", () => {
		alert(mySelect.value);
	});
};
