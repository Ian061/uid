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

    cartlist.innerHTML = "";

    if (cart.length == 0){
        emptyMessage.style.display = "block";
        cartSection.style.display = "none";
    } else{
        emptyMessage.style.display = "none";
        cartSection.style.display = "block";
    }

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.className = "cart-item";

        li.innerHTML = `
            <a href="${item.link}" class = "card">
                <div class = "card-content">
                    <img src="${item.image}" alt = "Menuimg" class = "card-image">
                    <h3>${item.name}</h3>
                </div>
            </a>
        `;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        cartlist.appendChild(li);
    });
}



function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}




