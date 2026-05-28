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

    // get elements from localstorage and store them as elements in array
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

    // Loop through each item
    cart.forEach((item, index) => {

        subtotal += item.price;
        let li = document.createElement("li");
        li.className = "cart-item";

        li.innerHTML = `
            <a href="${item.link}?product=${item.id}" class = "card card-cart">
                <div class = "card-content font-white">
                    <img src="${item.image}" alt = "Menuimg" class = "card-image">
                    <div class= "item-info">

                        <h3 class = "text-headers font-white">
                            ${item.name}
                        </h3>
                        
                        <p class = text-headers>
                            $${item.price.toFixed(2)} 
                        </p>

                    </div>
                </div>
            </a>
        `;

        // Create remove button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("cart__remove-button");
        removeBtn.onclick = () => removeItem(index);
        
        li.appendChild(removeBtn);
        
        cartlist.appendChild(li);

        
    });
    subtotalElement.textContent =  `${subtotal.toFixed(2)}` ;
}



function removeItem(index){

    // get elements from localstorage and store them as elements in array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    //remove elements with specific index
    cart.splice(index, 1);

    //converts elements in js array back into json format
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();

}

document.addEventListener("DOMContentLoaded", ()=> {

    // Initialise constant variables based on element id
    const checkoutBtn = document.getElementById("checkoutBtn");
    const cartSection = document.getElementById("cart-section");

    const checkoutForm = document.getElementById("checkout-form");
    const pageTitle = document.getElementById("page-title");
    const yourTitle = document.getElementById("your-order");
    const paymentButton = document.getElementById("paymentButton");

    const confirmOrder = document.getElementById("confirmOrder");
    const paymentInfo = document.getElementById("payment-info");

    // Hide checkout page.
    pageTitle.style.display = "none";
    checkoutForm.style.display = "none";
    paymentInfo.style.display = "none";

    let onCheckoutPage = false;

    checkoutBtn.onclick = () => {
        // If user is not on checkoutpage
        if (!onCheckoutPage){
            cartSection.style.display = "none";
            checkoutForm.style.display = "block";

            pageTitle.style.display = "block";
            yourTitle.style.display = "none";

            checkoutBtn.textContent = "Go Back";
            onCheckoutPage = true;
        // If user is on checkoutpage    
        } else {
            cartSection.style.display = "block";
            checkoutForm.style.display = "none";
            
            pageTitle.style.display = "none";
            yourTitle.style.display = "block";
        

            checkoutBtn.textContent = "Proceed to Checkout";
            onCheckoutPage = false;

        }
    };

    confirmOrder.onclick = () => {

        checkoutForm.style.display = "none";
        paymentInfo.style.display = "block";
        paymentButton.style.display = "block";
    };

    paymentButton.onclick = () => {
        alert("ORDER RECEIVED!")
    };
});

document.addEventListener("DOMContentLoaded", ()=> {
    const form = document.getElementById("checkout-form");
    const button = document.getElementById("confirmOrder");
    button.disabled = true;
    form.addEventListener("input", () => {
        // Check if form is valid if not, enable button
        if (form.checkValidity()){
            button.disabled = false;
        }
        // If form is invalid, disable button
        else {
            button.disabled = true;
        }
    });
});

const products = {
    ricebowl: {
        name: "Rice Bowl",
        description: "Five or six choices of asian rice dish all with jasmine rice and crunchy greens - choose a second for extra yum!",
        price: 15.00,
        image: "../image-14.png",
        link: "productpage.html",
        extras: ["Extra bacon", "Extra rice"]
    },

    philly :{
        name: "Philly Reuben",
        description: "A philadelphia classic: pastrami, sauerkraut, pickles, edam, emmental, remoulade, wasabi-djion, sourdough.",
        price: 15.00,
        image: "../image-7.png",
        link: "productpage.html",
        extras: ["Extra bacon", "Extra rice"]
    }
};


const params = new URLSearchParams(window.location.search);
const productId = params.get("product");
const product  = products[productId];

if (product){

    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = "$" + product.price.toFixed(2);
    
    const extrasContainer = document.getElementById("product-extras");

    product.extras.forEach(extra => {
        const el = document.createElement("h3");
        el.className = "text-subtitle spacing";
        el.textContent = extra;
        extrasContainer.appendChild(el);

    });


    document.getElementById("add-to-cart-btn").onclick = () => addToCart({
        name: product.name,
        price: product.price,
        image: product.image,
        link: product.link,
        id: productId 

  });
} 










