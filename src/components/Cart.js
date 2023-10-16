function Cart() {
                
    const plantNames = ["Monstera", "Lierre", "Bouquet de Fleurs"];
    const plantPrices = [8, 10, 15];

    return (
        <div>
        <h2>Panier</h2>
        <ul>
            <li>{plantNames[0]} - {plantPrices[0]}€</li>
            <li>{plantNames[1]} - {plantPrices[1]}€</li>
            <li>{plantNames[2]} - {plantPrices[2]}€</li>
        </ul>
        Total : {plantPrices[0]+plantPrices[1]+plantPrices[2]}€
        </div>
    );
};

export default Cart;