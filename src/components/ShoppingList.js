import {plantList} from '../datas/plantList';

import '../styles/ShoppingList.css';

function ShoppingList() {
    // ====> Avec reduce() <====
    // Fonction reduce permet de parcourir tous les éléments de notre tableau plantList
    // const categories = plantList.reduce((acc, plant) => 
    //     acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    //     // La fonction includes permet de ne pas avoir de doublon dans notre tableau
    // );

    // ====> Autre façon de faire avec forEach() <====
    const categories = []; 
    plantList.forEach(function (plant) {
            if(categories.includes(plant.category) === false) {
                categories.push(plant.category);
            }   
        }
    );

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isBestSale && <span>🔥</span>}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ShoppingList;