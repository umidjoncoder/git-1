document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const foodItem = document.getElementById('food-item').value;
        const quantity = document.getElementById('quantity').value;
        
        alert(`Order placed:\nFood Item: ${foodItem}\nQuantity: ${quantity}`);
    });
});


function sayHi(){
    alert('Buyurtmangiz 30 daqiqada yetkazilib beriladi !')
    window.location.href = "index.html";
}