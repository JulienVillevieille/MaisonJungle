import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({scaleValue, careType}) {

    const range = [1, 2, 3];

    const scaleType = 
        careType === "light" ?  (
            <img src={Sun} alt='sun-icon' /> 
        ) : (
            <img src={Water} alt='water-icon' />
        );

    return (
        <div onClick={ () => handleClickCareScale(scaleValue, careType)}>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    );
}

function handleClickCareScale(scaleValue, careType) 
{
    const scaleLabel = ["peu", "modérement", "beaucoup"];
    const scaleType = careType === "light" ? "de lumière" : "d'arrosage";
    alert(`Cette plante requiert ${scaleLabel[scaleValue-1]} ${scaleType}`);
}


export default CareScale;