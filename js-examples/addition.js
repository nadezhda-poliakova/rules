/**
 * Функция для сложения двух чисел
 * 
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} Сумма двух чисел
 */
function addNumbers(a, b) {
    return a + b;
}

// Пример использования
console.log(`5 + 3 = ${addNumbers(5, 3)}`);
console.log(`10.5 + 2.3 = ${addNumbers(10.5, 2.3)}`);

// Экспорт для Node.js (если нужен)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addNumbers };
}