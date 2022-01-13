import React from 'react'
import "./SubTotal.css"
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import CurrencyFormat from 'react-currency-format'


function SubTotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal__info">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />Order contains Gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true} 
                prefix={'Rs.'}/>
                <div className="subtotal__btn">
                    <button onClick={e => history.push('/payment')}>Proceed</button>
                </div>
        </div>
    )
}

export default SubTotal
