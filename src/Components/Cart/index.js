import React, { useEffect, useState } from 'react'

const Card = ({state, dispatch}) => {

  const {cart} = state;
  const [total, setTotal] =useState(0);

  const changeQty = (id, qty) =>{
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(()=>{
    setTotal(
      cart.reduce((acc, curr)=>acc +Number(curr.price)*curr.qty,0)
    );
  });
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      margin: 10,
      backgroundColor:'#ececec',
      padding: 10,
      width: '20%'
    }}>
      <b style={{fontSize: 30, alignSelf: 'center'}}>Cart</b>
      <b style={{alignSelf:'center'}}>Subtotal:${total}</b>


      {cart.length>0?(
        cart.map((prods)=>(
          <div 
          style={{
            display: 'flex',
            padding: 10,
            border: "1px solid grey",
            margin:5,
            justifyContent: 'space-between',
          }}>
            <div style={{display:'flex',gap:10}}>
            <img
             src={prods.thumbnail}
             alt={prods.title}
             style={{height:200, objectFit:'cover'}}/>
               <div
               style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'space-evenly'
               }}>
                <span>{prods.title}</span>
                <b>${prods.price}</b>
               </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}>
                <button onClick={()=> changeQty(prods.id,prods.qty - 1)}>-</button>
                <span>{prods.qty}</span>
                <button onClick={()=> changeQty(prods.id,prods.qty + 1)}>+</button>
              </div>
          </div>
        ))
      ):
        (
          <span style={{padding: 20, alignSelf:'center'}}>Cart is empty</span>
        )}
    </div>
  )
}

export default Card