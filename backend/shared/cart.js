let add = (jsonObj, data) => {
    let product = data.body;
    let item = jsonObj.contents.find(i => i.id === product.id);
    if (item)
        if (data.query && data.query.amount) {
            item.quantity = +data.query.amount;
        } else item.quantity++;
    else {
        product['quantity'] = 1;

        jsonObj.contents.push(
            product
        )
    }

    return JSON.stringify(jsonObj);
};

let remove = (jsonObj, data) => {
    const id = data.params.id;
    let item = jsonObj.contents.find(i => i.id === +id);
    if (item.quantity > 1)
        item.quantity--;
    else
        jsonObj.contents.splice(jsonObj.contents.indexOf(item), 1);

    return JSON.stringify(jsonObj);
};

let removeAll = (jsonObj, data) => {
    const id = data.params.id;
    let item = jsonObj.contents.find(i => i.id === +id);
    jsonObj.contents.splice(jsonObj.contents.indexOf(item), 1);

    return JSON.stringify(jsonObj);
};

module.exports = {
    add,
    remove,
    removeAll
};
