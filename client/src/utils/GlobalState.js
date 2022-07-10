//needed to instantiate context API, creates and alters container that holds global state
import React, { createContext, useContext } from "react";

// imports our reducer function
import { useProductReducer } from "./reducers";

//instantiates the global state object
const StoreContext = createContext();
// Provider makes data passed through universally available to components
const{ Provider } = StoreContext();

const StoreProvider = ({ value = [], ...props }) =>{
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });

    //use this to confirm that it works
    console.log(state);

        //must return with spread operator or nothing will be rendered
    return <Provider value={[state, dispatch]} {...props}/>;
}

//function to pass data to other components that need it
// ? custom react hook
const useStoreContext = () =>{
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };