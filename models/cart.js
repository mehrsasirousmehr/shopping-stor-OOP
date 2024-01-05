class Cart {
    constructor(parent, price) {
        this.parent = parent;
        this.price = price;
        this.products = []; // products that the user chooses
    }
}

export default Cart;
