//accedo a el h1
let button = document.querySelector("#addToDo");
//cuando se de click se realizará lo siguiente
button.addEventListener("click", function() {
	//your code here
	document.querySelector("#myList").childNodes;
	let elem = document.createElement("li");
	let myString = "<span><i class='fa fa-trash'></i></span>";
	elem.innerHTML = myString;
	document.getElementById("myList").appendChild(elem);
});

let items = document.querySelectorAll("#myList li"),
	tab = [],
	liIdx;

for (let i = 0; i < items.length; i++) {
	tab.push(items[i].innerHTML);
}

for (let i = 0; i < items.length; i++) {
	items[i].onclick = function() {
		liIdx = tab.indexOf(this.innerHTML);
		console.log(this.innerHTML + " INDEX = " + liIdx);
		let ul = document.querySelector("#myList");
		console.log(liIdx);
		let liToDelete = ul.childNodes[liIdx];
		liToDelete.parentNode.removeChild(liToDelete);
	};
}
