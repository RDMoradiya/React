import React, { useContext } from 'react'
import { Cocktailwrapper } from '../App'

function Cocktail() {

    const { cocktailList } = useContext(Cocktailwrapper)

    const Styled = {
        boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        borderRadius: '30px',
        backgroundSize: 'cover',
        height: '100%',
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {cocktailList.map((item, index) => {
                    const { strDrink, strDrinkThumb, strCategory, strIngredient1, strIngredient2, strIngredient3 } = item;

                    return (
                        <div className="col-md-3 mb-5" key={index}>
                            <div className="card" style={Styled}>
                                <div className='card-header'>
                                    <img src={strDrinkThumb} alt={strCategory} className='p-1' style={{ width: '100%', height: 'auto', borderRadius: '20px' }} />
                                </div>

                                <div className="card-body text-left p-4">
                                    <p className='mb-1'><b>Drink Name :-</b> {strDrink}</p>
                                    <p className='mb-1'><b>Drink Type :-</b> {strCategory}</p>
                                    <p className='mb-1 text-truncate' title={`${strIngredient1},${strIngredient2},${strIngredient3}`}><b>Ingredient :-</b> {strIngredient1},{strIngredient2},{strIngredient3}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Cocktail