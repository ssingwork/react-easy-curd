import React from "react"
import PropTypes from "prop-types"
import CartItemList from "../components/CartItemList";

export default class CartContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cartList : [
                {item : 'Mango', price: 13, uom : 'per kg' },
                {item : 'Apple', price: 23, uom : 'per kg' }
         ]            
        }
    }

    render () {
        return (<div>
            Cart Item
            <CartItemList cartList = {this.state.cartList} ></CartItemList>
        </div>)
    }
}

CartContainer.propTypes = {
}