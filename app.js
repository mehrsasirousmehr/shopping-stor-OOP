import { fetchData } from "./utils/httpReq.js";

// function render() {}
const render = async () => {
    const productsData = await fetchData();
    console.log(productsData);
};

document.addEventListener("DOMContentLoaded", render);
