
import {useDispatch} from 'react-redux';
import { addProduct } from './features/inventory/InventorySlice';

function ProductForm() {
    let dispatch = useDispatch()

    return (
        <form>
            <input type="text" name="product" placeholder="Enter product name" />
            <input type="number" name="quantity" placeholder="Enter quantity" />
            <input type="submit" value='Create Product' onClick={(e) => {
                e.preventDefault();
                dispatch(addProduct({ product: e.target.form.product.value, quantity: e.target.form.quantity.value}));
                
            }} />
        </form>
    )
}

export default ProductForm;