import React from 'react'
import "./Product.css"
import {useStateValue} from './StateProvider'

function Product({id,image, title,description,rating,published,oldPrice,newPrice}) {
    const [{basket},dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the items into datalayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                image:image,
                title:title,
                description:description,
                rating:rating,
                published:published,
                oldPrice:oldPrice,
                newPrice:newPrice,
            },
        });
    };
    return (
        <div className="product">
                    <img src={image} alt="book_img" className='img'/>    
                
                    <div className="product__info">
                            <p><h4><b>{title}</b> {description}</h4></p>
                            <div className="product__rating">
                                {Array(rating).fill().map((_, i)=>(
                                    <i class="far fa-star checked"></i>
                                ))}
                            </div>
                            <p><h5>{published}</h5></p>
                            <hr/>
                            <h4><strike>Old Price: <i class="fas fa-rupee-sign"><i>{oldPrice}</i></i></strike></h4>
                            <h3>New Price: <i class="fas fa-rupee-sign"><i>{newPrice}</i></i></h3>
                            <center>
                                <button onClick={addToBasket} className='product__btn' >Add to Cart</button> 
                            </center>
                                 
                    </div>  
        </div>
    )
}

export default Product
