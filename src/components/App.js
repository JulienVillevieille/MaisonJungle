import Banner from './Banner';
import Footer from './Footer';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

import '../styles/Layout.css';
import { useState, useEffect } from 'react';

function App() {
	const savedCart = localStorage.getItem("cart");
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

	// Sauvegarde du panier dans l'espace de stockage local
    useEffect (
        () => { localStorage.setItem("cart", JSON.stringify(cart)) }, 
        [cart]
    );

	return (
		<div>
			<Banner />
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	);
}
	
export default App;
	