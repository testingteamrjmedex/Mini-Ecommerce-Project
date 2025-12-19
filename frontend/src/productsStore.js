
const productsArray = [
    {
        id: "1",
        title: "Product1",
        price: 5.76
    },
    {
        id: "2",
        title: "Product2",
        price: 9.24
    },
    {
        id: "3",
        title: "Product3",
        price: 134.25
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
    
    if(productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}

export {productsArray, getProductData};