let num1 = 23
let num2 = 18

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

/* Several function for performing addition, subtraction, division and multiplication */
function add(){
	let add = num1 + num2
	document.getElementById("sum-el").textContent = "SUM: " + add
}

function subtract(){
	let sub = num1 - num2
	document.getElementById("sum-el").textContent = "SUM: " + sub
}

function divide(){
	let div = num1 / num2
	document.getElementById("sum-el").textContent = "SUM: " + div
}

function multiply(){
	let mul = num1 * num2
	document.getElementById("sum-el").textContent = "SUM: " + mul
}