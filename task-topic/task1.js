function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return 'Please provide a positive number of tickets sold.';
    }

    const ticketPrice = 120;
    const totalRevenue = ticketSale * ticketPrice;

    const guardSalary = 500;
    const employeeBreakfastExpense = 8 * 50;
    const totalExpense = guardSalary + employeeBreakfastExpense;

    const restOfMoney = totalRevenue - totalExpense;

    return restOfMoney;
}
