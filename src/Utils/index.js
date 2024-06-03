
/**
 * this function calculates total price of a new order
 * @param {Array} products cartProducts: array of objects
 * @returns {number} sum: total price
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(element => {
        sum += element.price
    });

    return sum;
}