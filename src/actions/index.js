let nextCartItemId = 0
export const addItemCart = text => ({
  type: 'ADD_CART',
  id: nextCartItemId++,
  text
})