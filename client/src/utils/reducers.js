import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';

// ! reducer function to change state in products arrays
// ! accepts 2 parameters(type/action name and value/data altered)
export const reducer = (state, action) =>{
    switch(action.type){
        //if action is the value of "UPDATE_PRODUCTS", return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return{
                ...state,
                products: [...action.products],
            };


            // if it is none of these actions, do not update at all keep things the same
            default: 
            return state;
    }
};