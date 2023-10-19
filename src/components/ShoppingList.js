import { useState } from 'react';
import {plantList} from '../datas/plantList';

import '../styles/ShoppingList.css';
import Categories from './Categories';

import PlantItem from './PlantItem';


function ShoppingList({cart, updateCart}) {
    // ====> Avec reduce() <====
    // Fonction reduce permet de parcourir tous les éléments de notre tableau plantList
    // const categories = plantList.reduce((acc, plant) => 
    //     acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    //     // La fonction includes permet de ne pas avoir de doublon dans notre tableau
    // );

    const [activeCategory, setActiveCategory] = useState('');
    const categories = []; 
    plantList.forEach(function (plant) {
            if(categories.includes(plant.category) === false) {
                categories.push(plant.category);
            }   
        }
    );

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        if(currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant, 
                {name, price, amount: currentPlantAdded.amount + 1}
            ])
        } else {
            updateCart([
                ...cart,
                {name, price, amount: 1}
            ])
        }
    }

    return (
        <div className='lmj-shopping-list'>

            <Categories 
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
           
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => 
                    !activeCategory || activeCategory === plant.category ? (
                        <div key={plant.id}>
                            <PlantItem
                                id={plant.id}
                                name={plant.name} 
                                cover={plant.cover} 
                                light={plant.light} 
                                water={plant.water}
                                price={plant.price}
                            />
                            <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    );
}



export default ShoppingList;