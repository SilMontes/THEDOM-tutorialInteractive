// Your code here
let input = document.querySelector("#addTodo").value;

let button = document.createElement("button");
button.type = "button";
button.innerText = "Add Task";
document.getElementById("container").appendChild(button);

let basurero = document.getElementsByClassName("fa fa-trash");
for (let i = 0; i < basurero.length; i++) {
	basurero.onclick = function() {
		let myUl = document.querySelector("ul");
		let children = myUl.childNodes;
		myUl.choldre.removeChild();
	};
}
