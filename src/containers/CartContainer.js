import React from "react"
import PropTypes from "prop-types"
import CartItemList from "../components/CartItemList";
import { useSelector,useDispatch,shallowEqual } from "react-redux";
import {addItemCart} from "../actions";

export const  CartContainer = () => {


    const cartList = useSelector(state => state.cartData.cartList,shallowEqual);
    const dispatch = useDispatch();

    return (<div>
        Cart Item
        <CartItemList cartList = {cartList} ></CartItemList>
        <button onClick={() => dispatch(addItemCart("Orange"))}>Add New</button>
    </div>)

}


export default CartContainer;