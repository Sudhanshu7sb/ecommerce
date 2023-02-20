
const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, quantity, product } = action.payload;

        let existingProduct = state.cart.find(item => item.id === id + color);


        if (existingProduct) {
            let updatedProduct = state.cart.map((item) => {
                if (item.id === id + color) {
                    let updatedQuantity = item.quantity + quantity;

                    if (updatedQuantity >= item.max) {
                        updatedQuantity = item.max;
                    }

                    return {
                        ...item,
                        quantity: updatedQuantity,
                    }
                }
                return item;
            })
            return {
                ...state,
                cart: updatedProduct,
            }
        } else {


            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                quantity,
                price: product.price,
                image: product.image[0].url,
                max: product.stock,

            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        }
    }

    if (action.type === "REMOVE_PRODUCT_FROM_CART") {
        let updatedCart = state.cart.filter((item) => item.id !== action.payload)
        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "SET_INCREASE") {
        let updatedProduct = state.cart.map((item) => {
            if (item.id === action.payload) {
                let incQuantity = item.quantity + 1;

                if (incQuantity >= item.max) {
                    incQuantity = item.max;
                }
                return { ...item, quantity: incQuantity }
            } else {
                return item
            }

        })
        return {
            ...state,
            cart: updatedProduct,
        }
    }
    if (action.type === "SET_DECREASE") {
        let updatedProduct = state.cart.map((item) => {
            if (item.id === action.payload) {
                let decQuantity = item.quantity - 1;

                if (decQuantity <= 1) {
                    decQuantity = 1;
                }
                return { ...item, quantity: decQuantity }
            } else {
                return item
            }

        })
        return {
            ...state,
            cart: updatedProduct,
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }


    if (action.type === "TOTAL_CART_ITEMS") {
        let updatedTotalCartItems = state.cart.reduce((initialVal, currItem) => {
            let { quantity } = currItem;

            initialVal = initialVal + quantity;
            return initialVal;
        },0)
        return {
            ...state,
            total_items: updatedTotalCartItems,
        }
    }

    if(action.type === "TOTAL_PRICE"){
        let total = state.cart.reduce((acc,currItem) => {
            let {price,quantity} = currItem;

            acc = acc + (price*quantity);
            return acc
        },0);
        return {
            ...state,
            total_price:total,
        }
    }

    return state

}

export default cartReducer;