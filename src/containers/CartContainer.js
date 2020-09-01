import React from "react"
import PropTypes from "prop-types"
import CartItemList from "../components/CartItemList";
import { connect } from "react-redux";
import {addItemCart} from "../actions";

class CartContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        const {dispatch} = this.props;

        return (<div>
            Cart Item
            <CartItemList cartList = {this.props.cartList} ></CartItemList>
            <button onClick={e => {dispatch(addItemCart("Orange"))} }>Add New</button>
        </div>)
    }
}

CartContainer.propTypes = {
}

const mapStateToProps = state => ({
    cartList : state.cartData.cartList
})

export default connect(mapStateToProps)(CartContainer)