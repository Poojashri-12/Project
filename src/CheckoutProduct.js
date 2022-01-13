import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title,description,  rating, published, oldPrice, newPrice, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">      
            <img src={image} alt="book_img" className='checkoutProduct__img'/>    
                
            <div className="checkoutProduct__info">
                <p><h4><b>{title}</b> {description}</h4></p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i)=>(
                        <i class="far fa-star checked"></i>
                    ))}
                </div>
                <p><h5>{published}</h5></p>
                <hr/>
                <h4><strike>Old Price: <i class="fas fa-rupee-sign"><i>{oldPrice}</i></i></strike></h4>
                <h3>New Price: <i class="fas fa-rupee-sign"><i>{newPrice}</i></i></h3>
                {!hideButton && (
                    <button onClick={removeFromBasket} className="checkoutProduct__btn">Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct