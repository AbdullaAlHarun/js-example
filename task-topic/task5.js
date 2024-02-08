function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "Invalid input";
    }

    let totalIncome = 0;
    let tax = 0;

    for (let i = 0; i < payments.length; i++) {
        totalIncome += payments[i];
        if (payments[i] >= 3000) {
            tax += payments[i] * 0.20;
        }
    }

    const savings = totalIncome - livingCost - tax;

    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    }
}
