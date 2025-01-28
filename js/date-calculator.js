function calculateDifference() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);

    const differenceInTime = date2 - date1;
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    const daysInYear = 365;
    const daysInMonth = 30; // Среднее количество дней в месяце

    const years = Math.floor(differenceInDays / daysInYear);
    const remainingDaysAfterYears = differenceInDays % daysInYear;
    const months = Math.floor(remainingDaysAfterYears / daysInMonth);
    const days = remainingDaysAfterYears % daysInMonth;

    let result = '';
    if (years > 0) result += `${years} years `;
    if (months > 0) result += `${months} months `;
    if (days > 0 || result === '') result += `${days} days`;

    document.getElementById('data-screen').value = result.trim();

}

document.getElementById('date1').addEventListener('input', calculateDifference);
document.getElementById('date2').addEventListener('input', calculateDifference);