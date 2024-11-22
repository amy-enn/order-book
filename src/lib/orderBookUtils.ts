export const groupByTicker = (

    orders: { ticker: string; price: number; quantity: number }[]
) => {

    // .reduce interates over an array and "reduces" it to a single value (number, object, or another array)
    // array.reduce((accumulator, currentValue) => {
    // process currentValue and update accumulator
    // return accumulator;
    // }, initialValue);


    // grouped = the object that stores grouped orders
    // order = each order in the array
    // initial value is {}, an empty object to start grouping orders in
    return orders.reduce((grouped, order) => {
        if (!grouped[order.ticker]) {
            grouped[order.ticker] = [];
        }
        grouped[order.ticker].push(order);
        return grouped;

        // Record = a TS utility type that defines an object where:
        // keys are of a specified type
        // values are also of a specified type
    }, {} as Record<string, typeof orders>);
};
