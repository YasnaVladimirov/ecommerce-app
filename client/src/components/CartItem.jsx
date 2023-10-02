import React from "react";
import { Stack } from "react-bootstrap";
import formatCurrency from "../util/formatCurrency";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import data from "../data/items";

export default function CartItem({ currItem }) {
  const { removeItem } = useShoppingCartContext();
  const item = data.find((item) => item.id === currItem.id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      className="d-flex align-items-center mt-3"
    >
      <div className="me-auto" style={{ fontSize: "1rem" }}>
        <span style={{fontWeight: "600"}}>{item.name}</span>
        <br />
        {formatCurrency(item.price)}
        <span style={{ fontSize: ".8rem" }}> x{currItem.quantity}</span>
      </div>
      <div className="d-flex align-items-center" style={{ fontSize: "0.9rem" }}>
        {formatCurrency(currItem.quantity * item.price)}
        <button
          className="btn btn-danger ms-1"
          onClick={() => removeItem(item.id)}
        >
          x
        </button>
      </div>
    </Stack>
  );
}
