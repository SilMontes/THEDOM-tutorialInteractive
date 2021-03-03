//accedemos al input
let inputSpace = document.querySelector("#addToDo");
//accedemos a la UL
let myUl = document.getElementById("myList");

//agregar evento al input
inputSpace.addEventListener("change", function() {
	let newLi = document.createElement("li");
	let newTask = inputSpace.value;
	let liContent = "<span><i class='fa fa-trash'>" + newTask + "</i></span>";
	newLi.innerHTML = liContent;
	myUl.appendChild(newLi);

	for (var i = 0; i < myUl.children.length; i++) {
		myUl.children[i].addEventListener("click", function() {
			this.parentNode.removeChild(this);
		});
	}
});

for (var i = 0; i < myUl.children.length; i++) {
	myUl.children[i].addEventListener("click", function() {
		this.parentNode.removeChild(this);
	});
}
// //accedo a el h1
// let button = document.querySelector("#addToDo");
// //cuando se de click se realizará lo siguiente
// button.addEventListener("change", function() {
// 	//your code here
// 	let valor = button.value;
// 	document.querySelector("#myList").childNodes;
// 	let elem = document.createElement("li");
// 	let myString = "<span><i class='fa fa-trash'>" + valor + "</i></span>";
// 	elem.innerHTML = myString;
// 	document.getElementById("myList").appendChild(elem);
// 	let lista = document.getElementById("myList");
// 	for (let i = 0; i < lista.children.length; i++) {
// 		lista.children[i].addEventListener("click", function() {
// 			this.parentNode.removeChild(this);
// 		});
// 	}
// });

// let items = document.querySelectorAll("#myList li"),
// 	tab = [],
// 	liIdx;

// for (let i = 0; i < items.length; i++) {
// 	tab.push(items[i].innerHTML);
// }

// for (let i = 0; i < items.length; i++) {
// 	items[i].onclick = function() {
// 		liIdx = tab.indexOf(this.innerHTML);
// 		console.log(this.innerHTML + " INDEX = " + liIdx);
// 		let ul = document.querySelector("#myList");
// 		console.log(liIdx);
// 		let liToDelete = ul.childNodes[liIdx];
// 		liToDelete.parentNode.removeChild(liToDelete);
// 	};
// }
