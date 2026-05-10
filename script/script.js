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

    cartlist.innerHTML = "";

    if (cart.length == 0){
        emptyMessage.style.display = "block";
    } else{
    emptyMessage.style.display = "none";
    }
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.classname = "cart-item";

        let text = document.createElement("span");
        text.textContent = item;

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = () => removeItem(index);

        li.appendChild(text);
        li.appendChild(btn);

        cartlist.appendChild(li);
    });
}

cart.forEach((item,index) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    const text = document.createElement("span");
    text.textContent = item;

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = () => removeItem(index);

    div.appendChild(text);
    div.appendChild(btn);

    cartContainer.appendChild(div);
});

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}