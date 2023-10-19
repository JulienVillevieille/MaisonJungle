import '../styles/Cart.css';
import { useState } from 'react';

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(false);
    const items = Object.keys(cart);

    const total = items.reduce(
        (acc, item) => acc + cart[item].amount * cart[item].price,
        0
    );

    return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} - {price}€ x {amount}    
                </div>
            ))}
			<h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	);
}

export default Cart;