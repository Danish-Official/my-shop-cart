import React from 'react'
import Product from './Product.js'
// for loop doesn't work in jsx, so we use forEach loop or maps
export default function ProductList(props) {

    return props.ProductList.length>0 ?(
        props.ProductList.map((productEle,index) => {
            return <Product ProductEle={productEle} key={index} removeItem={props.removeItem}  incrQuantity={props.incrQuantity} decrQuantity={props.decrQuantity} indx={index} />
        })
    )
    :
    <h1>The cart is empty☹️</h1>
}
// key={index}