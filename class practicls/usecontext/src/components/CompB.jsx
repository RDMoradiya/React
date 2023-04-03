import React, { useContext } from 'react'
import { UseContext } from '../App'
import CompC from './CompC'

function CompB() {

    const mapData = useContext(UseContext)

    const { product, setProducts } = mapData

    const HideProductsData = () => {
        setProducts([])
    }


    return (
        <>
            <CompC />
            <h4>Product Listing :-</h4>
            <hr />
            {
                product.map((item, index) => {
                    return (
                        <h5 key={index}>{item}</h5>
                    )
                })
            }
            <button className='btn btn-primary' onClick={HideProductsData}>Clear Product List</button>
        </>
    )
}

export default CompB