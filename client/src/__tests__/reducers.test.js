import { reducer } from '../utils/reducers';

// * import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';


// * create a sample of what our global stat will look like
const initialState = {
    products: [],
    categories:[{ name: 'Food'}],
    currentCategory: '1',
};

// ! Test to add product to empty products array in initialState
test('UPDATE_PRODUCTS', () =>{
    let newState = reducer(initialState,{
        type: UPDATE_PRODUCTS,
        // empty objects allows us to test if data is passes through the action/reducer combo
        products:[{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});

test('UPDATE_CATEGORIES', () =>{
    let newState = reducer(initialState,{
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

