import Products from "./models/products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");

const render = async () => {
    const productsData = await fetchData();
    const productsInstance = new Products(productsNode, productsData);

    productsInstance.showProducts();
};

document.addEventListener("DOMContentLoaded", render);
