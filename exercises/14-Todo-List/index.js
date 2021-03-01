// Your code here
// let input = document.querySelector("#addTodo").value;

// let basurero = document.getElementById("myList");
// for (let i = 0; i < basurero.length; i++) {
// 	basurero[i].onclick = function() {
// 		let myUl = document.querySelector("#myList");
// 		let hijos = myUl.childNodes;
// 		hijos.parentNode.removeChild(e.target);
// 	};
// }
// let documento = document.getElementById("container");
// documento.addEventListener("blur", agregar);

let button = document.querySelector("#addToDo");
button.addEventListener("click", function() {
	//your code here
	document.querySelector("#myList").childNodes;
	let elem = document.createElement("li");
	let myString = "<span><i class='fa fa-trash'></i> Shower</span>";
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
