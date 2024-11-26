import React, { useEffect, useState } from "react";

const Card = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        padding: 20,
        width: "30%",
        borderRadius: 8,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <b
        style={{
          fontSize: 30,
          alignSelf: "center",
          color: "#333",
          marginBottom: 10,
        }}
      >
        Cart
      </b>
      <b
        style={{
          alignSelf: "center",
          color: "#555",
          marginBottom: 20,
        }}
      >
        Subtotal: ${total.toFixed(2)}
      </b>

      {cart.length > 0 ? (
        cart.map((prods) => (
          <div
            key={prods.id}
            style={{
              display: "flex",
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 8,
              margin: 5,
              justifyContent: "space-between",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img
                src={prods.thumbnail}
                alt={prods.title}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 8,
                  objectFit: "cover",
                  border: "1px solid #ccc",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <span style={{ fontSize: 16, fontWeight: "bold" }}>
                  {prods.title}
                </span>
                <b style={{ color: "#888" }}>${prods.price.toFixed(2)}</b>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <button
                style={{
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
                onClick={() => changeQty(prods.id, prods.qty - 1)}
                disabled={prods.qty <= 1}
              >
                -
              </button>
              <span style={{ fontSize: 16, fontWeight: "bold" }}>
                {prods.qty}
              </span>
              <button
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
                onClick={() => changeQty(prods.id, prods.qty + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span
          style={{
            padding: 20,
            alignSelf: "center",
            fontSize: 16,
            color: "#999",
          }}
        >
          Cart is empty
        </span>
      )}
    </div>
  );
};

export default Card;
