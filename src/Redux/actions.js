import axios from "axios";
import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_DETAILS_REQUEST,
    GET_PRODUCTS_DETAILS_SUCCESS,
    GET_PRODUCTS_DETAILS_FAILURE,
    ADD_TO_CART,ADD_TO_CART_ERROR,
    REMOVE_FROM_CART,
    // RESET_CART

} from "./actionTypes.js";
const URL = "https://flipkart-server-o8zi.onrender.com";
export const getProducts = () => async (dispatch) => {
    try {
        let { data } = await axios.get(`${URL}/products`);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message });
    }
}
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_DETAILS_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_DETAILS_FAILURE, payload: error.response });
    }
}

export const addToCart = (id,quantity) => async (dispatch)=> {
       try {
        const {data } = await axios.get(`${URL}/product/${id}`)
        dispatch({type:ADD_TO_CART,payload:{...data,quantity}});
       } catch (error) {
        dispatch({type:ADD_TO_CART_ERROR,payload:error.message})
       }
}

export const removeFromCart = (id) => async (dispatch)=> {
       dispatch({type:REMOVE_FROM_CART,payload:id})
}
