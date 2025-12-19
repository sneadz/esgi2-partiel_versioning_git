function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function mul(a, b) {
	return a * b;
}

function parseNumber(value) {
	const n = Number(value);
	return Number.isFinite(n) ? n : null;
}

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("calc-form");
	const inputA = document.getElementById("a");
	const inputB = document.getElementById("b");
	const selectOp = document.getElementById("op");
	const output = document.getElementById("result");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const a = parseNumber(inputA.value);
		const b = parseNumber(inputB.value);

		if (a === null || b === null) {
			output.textContent = "Entrée invalide";
			return;
		}

		let res;
		switch (selectOp.value) {
			case "add":
				res = add(a, b);
				break;
			case "sub":
				res = sub(a, b);
				break;
			case "mul":
				res = mul(a, b);
				break;
			default:
				output.textContent = "Opération inconnue";
				return;
		}

		output.textContent = String(res);
	});
});
