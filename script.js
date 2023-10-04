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