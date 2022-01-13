import React from 'react'
import "./Checkout.css";
import SubTotal from './SubTotal'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout__info">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/kindle/merch/2016/campaign/lucida/D/doppler-assoc_banner-d-uk-portal-banner-470x200._CB279654735_.jpg" alt="advertise" className="checkout__ad" />
                <h3>Advertisement</h3>
                <div className="user" >
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            published={item.published}
                            oldPrice={item.oldPrice}
                            newPrice={item.newPrice}
                        
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
                
            </div>
        </div>
    )
}

export default Checkout
