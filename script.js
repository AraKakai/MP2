document.getElementById("customer-button").addEventListener("click", function () {
    window.location.href = "customer.html"; // Replace with the actual customer URL
});

document.getElementById("supplier-button").addEventListener("click", function () {
    window.location.href = "supplier.html"; // Replace with the actual supplier URL
});

function addToCart() {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    
    
    

    alert(`Added ${quantity} ${size} item(s) to the cart.`);
}

function buyNow() {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    
    

    alert(`Purchased ${quantity} ${size} item(s).`);
}



