import React from "react"
import PropTypes from "prop-types"

export default class CartItemList extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const cartList  = this.props.cartList;
        const cartItemUI = cartList.map((c) => {
           return <div key={c.item} >
               <div>{c.item}</div>
               <div>{c.price}</div>
               <div>{c.uom}</div>
           </div>
        });
        return (<div>
            {cartItemUI}
        </div>)
    }    
}

CartItemList.propTypes = {
 cartList : PropTypes.array.isRequired
}