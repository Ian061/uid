function Clicked(){
    alert("Clicked Button")
}

function addToCart(item){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item successfully added to cart!"); 
    window.location.href = "cart.html";
}

function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartlist = document.getElementById("cart-items");

    let emptyMessage = document.getElementById("empty-cart-message");
    let cartSection = document.getElementById("cart-section");

    let subtotalElement = document.getElementById("subtotal");

    cartlist.innerHTML = "";
    let subtotal = 0;

    if (cart.length == 0){
        emptyMessage.style.display = "block";
        cartSection.style.display = "none";
    } else {
        emptyMessage.style.display = "none";
        cartSection.style.display = "block ";
    }

    cart.forEach((item, index) => {

        subtotal += item.price;
        let li = document.createElement("li");
        li.className = "cart-item";

        li.innerHTML = `
            <a href="${item.link}" class = "card">
                <div class = "card-content font-white">
                    <img src="${item.image}" alt = "Menuimg" class = "card-image">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)} </p>
                </div>
            </a>
        `;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        
        cartlist.appendChild(li);

        
    });
    subtotalElement.textContent =  `${subtotal.toFixed(2)}` ;
}



function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();

}

document.addEventListener("DOMContentLoaded", ()=> {
    
    const checkoutBtn = document.getElementById("checkoutBtn");
    const cartSection = document.getElementById("cart-section");
    const checkoutForm = document.getElementById("checkout-form");
    const pageTitle = document.getElementById("page-title");
    const yourTitle = document.getElementById("your-order");

    pageTitle.style.display = "none";
    checkoutForm.style.display = "none";

    let onCheckoutPage = false;

    checkoutBtn.onclick = () => {
        if (!onCheckoutPage){
            cartSection.style.display = "none";
            checkoutForm.style.display = "block";
            pageTitle.style.display = "block";
            yourTitle.style.display = "none";

            checkoutBtn.textContent = "Go Back";
            onCheckoutPage = true;
        } else {
            cartSection.style.display = "block";
            checkoutForm.style.display = "none";
            pageTitle.style.display = "none";
            yourTitle.style.display = "block";

            checkoutBtn.textContent = "Proceed to Checkout";
            onCheckoutPage = false;

        }

    confirmOrder.onclick = () => {
        alert("ORDER RECEIVED!")
    }
        
    };
});





