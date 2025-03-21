
const handleAddToCart = () => {
    const productName = document.getElementById("productName");
    const productQuantity = document.getElementById("ProductQuantity");

    const name = productName.value 
    const quantity = productQuantity.value 

    // console.log(name, quantity)
    displayCart(name, quantity)
    // handleSetToLocalStorage(name, quantity)
    saveLocalStorage(name, quantity)

    productName.value = "";
    productQuantity.value="";
}

const displayCart = (product,quantity) => {
    const productContainer = document.getElementById("product-container");

    const li = document.createElement("li");
    li.innerHTML = `${product}:${quantity}`

    productContainer.appendChild(li)
}


const getProduct = () => {
    let cart= {};
    const gotProduct = localStorage.getItem("cart");

    if(gotProduct){
        cart = JSON.parse(gotProduct)
    }
    
    return cart;
    

}


const saveLocalStorage = (productName,Quantity) => {
    const cart =getProduct();
    console.log(cart);

    // bracket notation concept
    cart[productName]=Quantity;

    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart",cartString);

}

const displayFromLocal = () => {
    const prodocts = getProduct();
    console.log(prodocts)
    for(const product in prodocts){
        console.log(product);
        console.log(prodocts[product])

        displayCart(product,prodocts[product]);
    }
}

displayFromLocal();



// bracket notation concept
// const product = {
//     goals: 20
// }

// product["Asists"]=5
// product["goals"]=35

// console.log(product)



// const handleSetToLocalStorage = (productName,Quantity) => {
//     const newProduct = {name: Quantity};
//     console.log(newProduct)
//     localStorage.setItem("cart",JSON.stringify(newProduct))

// }

