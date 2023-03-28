
function calculatePrice(cart, discountPercent){
    let totalPrice=0;
    cart.forEach(element => {
        totalPrice += element.price* element.quantity;
    });
    let discountAmount = discountPercent*totalPrice/100;
    let priceAfterDiscount = totalPrice-discountAmount;
    return {totalPrice, discountAmount ,priceAfterDiscount};
}

module.exports = {calculatePrice}

