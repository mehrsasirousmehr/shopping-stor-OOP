class Cart {
    constructor(parent, price) {
        this.parent = parent;
        this.price = price;
        this.products = []; // products that the user chooses
        this.toShow = [];
    }

    // show purchased products
    showProducts() {
        this.toShow = [...new Set(this.products)]; // delete duplicate items
        this.parent.innerHTML = "";
        this.toShow.forEach((product) => {
            const qty = this.products.filter((p) => p.id === product.id).length;
            this.createCard(product, qty);
        });
    }

    createCard(data, qty) {
        console.log(data);
    }
}

export default Cart;
