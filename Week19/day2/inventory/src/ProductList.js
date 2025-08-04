
import {useSelector, useDispatch} from 'react-redux';
import { removeProduct, updateQuantity } from './features/inventory/InventorySlice';
import { useRef } from 'react';

function ProductList() {
    let products = useSelector(state => state.inventory);
    let keyArray = Array.from(Object.keys(products));

    return (<div>
    {keyArray.map(productKey => {
        return <ProductCard product={products[productKey]} name={productKey} key={products[productKey].id}/>
    })}
    </div>)
}

function ProductCard({product, name}) {

    let inputRef = useRef();
    let dispatch = useDispatch()
    return (
        <div>
            <h2>{name}</h2>
            <h6>Quantity Available: {product.quantity}</h6>
            <input type='number' ref={inputRef}/>
            <button onClick={(e) => dispatch(updateQuantity({product: name, quantity: inputRef.current.value}))}>Edit Quantity</button>
            <br/>
            <button onClick={() => dispatch(removeProduct({product: name}))}>Delete Product</button>
        </div>
    )
}

export default ProductList;