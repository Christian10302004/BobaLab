const form = document.getElementById("purchase-form");
const purchaseAmountInput = document.getElementById("purchase-amount");
const pointsEarnedInput = document.getElementById("points-earned");
const purchaseList = document.getElementById("purchase-list");
let totalPoints = 0;

// Points earned formula
const pointsFormula = purchase => Math.floor(purchase / 20);

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const purchaseAmount = parseFloat(purchaseAmountInput.value);
	if (isNaN(purchaseAmount)) {
		alert("Please enter a valid purchase amount.");
		return;
	}
	const pointsEarned = pointsFormula(purchaseAmount);
	totalPoints += pointsEarned;
	createPurchase(purchaseAmount, pointsEarned);
	purchaseAmountInput.value = "";
	pointsEarnedInput.value = pointsEarned;
	document.getElementById("total-points").innerText = totalPoints;
});

function createPurchase(purchaseAmount, pointsEarned) {
	const li = document.createElement("li");
	li.innerHTML = `
    Purchase Amount: ${purchaseAmount.toFixed(2)}<br>
    Points Earned: ${pointsEarned}
  `;
	purchaseList.appendChild(li);
}