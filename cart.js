
const handleAddToCart = () => {
    const productName = document.getElementById("productName");
    const productQuantity = document.getElementById("ProductQuantity");

    const name = productName.value 
    const quantity = productQuantity.value 

    // console.log(name, quantity)
    displayCart(name, quantity)
    handleSetToLocalStorage(name, quantity)

    productName.value = "";
    productQuantity.value="";
}

const displayCart = (product,quantity) => {
    const productContainer = document.getElementById("product-container");

    const li = document.createElement("li");
    li.innerHTML = `${product}:${quantity}`

    productContainer.appendChild(li)
}

const handleSetToLocalStorage = (productName,Quantity) => {
    const newProduct = {name: Quantity};
    console.log(newProduct)
    localStorage.setItem("cart",JSON.stringify(newProduct))

}

