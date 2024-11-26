import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "space-evenly",
        gap: 10,
        width: "100%",
        // margin: "20px auto",
      }}
    >
      {products.map((prods) => (
        <div
          key={prods.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid #ddd",
            borderRadius: 8,
            width: "30%",
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            gap: 10,
          }}
        >
          <img
            src={prods.thumbnail}
            alt={prods.title}
            style={{
              height: 200,
              objectFit: "cover",
              borderRadius: 8,
              marginBottom: 10,
              border: "1px solid #ccc",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: 5,
            }}
          >
            <span style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
              {prods.title}
            </span>
            <b style={{ fontSize: 16, color: "#888" }}>${prods.price.toFixed(2)}</b>
          </div>

          {cart.some((p) => p.id === prods.id) ? (
            <button
              style={{
                padding: "10px 15px",
                border: 0,
                borderRadius: 5,
                backgroundColor: "#ff6b6b",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: 10,
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prods.id,
                })
              }
            >
              Remove from cart
            </button>
          ) : (
            <button
              style={{
                padding: "10px 15px",
                border: 0,
                borderRadius: 5,
                backgroundColor: "#4caf50",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: 10,
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prods.id,
                    title: prods.title,
                    thumbnail: prods.thumbnail,
                    qty: 1,
                    price: prods.price,
                  },
                })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
