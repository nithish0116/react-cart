import React from 'react'

const Products = ({state ,dispatch}) => {

    const {products, cart} = state;

  return (
    <div 
    style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%'
    }}>
        {products.map((prods) => (
            <div 
            key={prods.id}
            style={{
                display:'flex',
                flexDirection: 'column',
                padding: 10,
                border: '1px solid grey',
                width:'30%',
                gap:10,
            }}>
                <img
                  src={prods.thumbnail}
                  alt={prods.title}
                  style={{height:200, objectFit:'cover'}}/>
                  <div>
                    <span>{prods.title}</span>
                    <b>${prods.price}</b>
                  </div>

                  {
                     cart.some(p=>p.id===prods.id)?
                    ( <button 
                        style={{
                          padding:5,
                          border: 0,
                          borderRadius:5,
                          backgroundColor: 'red',
                          color: 'white'
                        }} 
                        onClick={()=>
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prods.id,
                            })
                        }>
                          Remove form cart
                        </button>
                        ):(
                     <button 
                       style={{
                       padding:5,
                       border: 0,
                       borderRadius:5,
                       backgroundColor: 'green',
                       color: 'white'
                     }} 
                        onClick={()=>dispatch({
                            type: 'ADD_TO_CART',
                            payload: {
                                id: prods.id,
                                title: prods.title,
                                thumbnail:prods.thumbnail,
                                qty:1,
                                price: prods.price,
                            }
                        })}>
                       Add to cart
                     </button>
                  )
                  }
                  

                 
            </div>
        ))}
    </div>
  )
}

export default Products