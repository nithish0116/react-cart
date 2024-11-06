import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { cartReducer } from '../Reducers/cartreducer';
import Products from '../Products/products';
import Card from '../Cart';

function Home () {
    const [state, dispatch]=useReducer(cartReducer,{
      products: [],
      cart:[],
    });
    console.log(state);
    

    const fetchproducts = async ()=>{
        const {data} = await axios.get("https://dummyjson.com/products");
        dispatch({
          type: "ADD_PRODUCTS",
          payload: data.products,
        });
      };
   
    useEffect(()=>{
        fetchproducts();
    },[])
  return (
    <>
    <div style={{display: 'flex'}}>
        <Products state={state} dispatch={dispatch}/>
        <Card state={state} dispatch={dispatch}/>
    </div>
    </>
  )
}

export default Home;