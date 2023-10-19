import Banner from './Banner';
import Footer from './Footer';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

import '../styles/Layout.css';
import { useState } from 'react';

function App() {
	const [cart, updateCart] = useState([]);

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
	