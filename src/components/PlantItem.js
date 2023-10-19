import CareScale from "./CareScale";
import '../styles/PlantItem.css'


function PlantItem({name, cover, light, water, price}) {
    return (
        <li className='lmj-plant-item'>
            <span className="lmj-plant-item-price">{price}€</span>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    );
}



export default PlantItem;