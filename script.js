let cart = [];

function Add(_name, _price) 
{
    let item = {
        Name: _name,
        Price: _price
    };
    cart.push(item);
}

function Receipt() {
    let total = 0;
    let counter = 1;

    cart.forEach((item) => {
        console.log(`${counter}. ${item.Name} - $${item.Price}`)
        total += item.Price;
        counter ++;
    }); 
    total = (total).toFixed(2);
    let grandTotal = (total * 1.06).toFixed(2); 
    let tax = (grandTotal - total).toFixed(2);

    console.log(`Subtotal: $${total}. \nTax:$${tax}\nTotal: $${grandTotal}.`)
    cart = [];

}