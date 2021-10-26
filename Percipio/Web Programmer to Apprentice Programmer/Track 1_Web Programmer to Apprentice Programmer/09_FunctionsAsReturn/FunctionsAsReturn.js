//run with node FunctionsAsReturn.js

//e-commerce platform, global users, with accounting done in USD

let fxRates = {
    INR: 72,
    EUR: 0.9
}

let discounts= {
    INR: 0.1,
    EUR: 0.2
}

//fx may be constantly changed

let inCart = {
    id: 1,
    total: 81000,
    currency: "INR"
}

let euCart = {
    id: 2,
    total: 722,
    currency:"EUR"
}

//Discounts don't change. My objective is to store the transaction value in USD, by applying the FX ratest to each of these carts

function getTotalPriceFn(cart) {
    cart.finalTotal = cart.total *(1-discounts[cart.currency]);

    function totalUSDPrice() {
        return cart.finalTotal / fxRates[cart.currency];
    }

    return totalUSDPrice;
}

//Now we apply the discounts. 
//We leave the calculation of the fx rates for latter because we only want to do this at the very last moment
let inCartTotalUSD = getTotalPriceFn(inCart);
let euCartTotalUSD = getTotalPriceFn(euCart);

//finally, we apply the FX rates.
//Because of JavaScript's Closures, the return function is packaged with the fields defined outside of it's scope
//so the cart object referenced is the correct one

console.log("Indian sale in USD: ", inCartTotalUSD());
console.log("European sale in USD: ", euCartTotalUSD());