"use strict"
function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  percent = percent / 100; // Преобразуем процентную ставку в десятичное значение
  const monthlyPercent = percent / 12; // Месячная процентная ставка
  const creditAmount = amount - contribution; // Тело кредита

  const monthlyPayment =
    creditAmount *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)); // Ежемесячный платеж

  const totalPayment = monthlyPayment * countMonths; // Общая сумма выплат

  return +totalPayment.toFixed(2); // Округляем результат до двух знаков после запятой и возвращаем
}