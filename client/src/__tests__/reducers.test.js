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
    // allows for testing of changing current category
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

test('UPDATE_CURRENT_CATEGORY', () =>{
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        // changes state from 1 to 2
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
});

