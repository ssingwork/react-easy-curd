const initialState = {
    cartList : [
        {id : 1,item : 'Mango', price: 13, uom : 'per kg' },
        {id : 2,item : 'Apple', price: 23, uom : 'per kg' }
    ]
    
}
const addCart = (state = initialState,action) => {
    switch(action.type){ 
        case 'ADD_CART':
            console.log("On add cart" , action)
            let _cartList = [...state.cartList];
            _cartList.push({id : 2,item : action.text, price: 23, uom : 'per kg' })     
            return {...state, cartList : _cartList};            
        default:
            return state;    
    }
}

export default addCart;