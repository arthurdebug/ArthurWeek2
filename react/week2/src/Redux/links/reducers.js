import {
    LINKS_REQUEST,
    ADD_LINKS_SUCCESS,
    ADD_LINKS_FAIL,
    LIST_LINKS_SUCCESS,
    LIST_LINKS_FAIL,
  } from "./actions";

const initialState = {
    links: []
};
 
export const linkReducer = (state = initialState, action/* add additional parameters here */) => {
    // Use switch to handle different actions
    switch (action.type) {
        case LINKS_REQUEST:
            return {
                 ...state, loading: true, error: false };
            
        case LIST_LINKS_SUCCESS:
            return {
                      loading: false,
                      error: false,
                      linkList: action.payload,
                    };
        case ADD_LINKS_SUCCESS:
            return {
                          loading: false,
                          error: false,
                          linkList: state.linkList.concat([action.payload]),
                        };
        case LIST_LINKS_FAIL:
            return { ...state, loading: false, error: true };
        case ADD_LINKS_FAIL:
            return { ...state, loading: false, error: true };
                                    
        default:
            return state; // Do not change the state in case of any other actions
    }
};