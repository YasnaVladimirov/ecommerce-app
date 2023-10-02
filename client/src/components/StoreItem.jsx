import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import formatCurrency from "../util/formatCurrency";
import useShoppingCartContext from "../hooks/useShoppingCartContext";

function StoreItem({ item }) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useShoppingCartContext();
  const quantity = getItemQuantity(item.id);
  
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={item.img}
        style={{
          padding: "1.2rem",
          width: "100%",
          height: "250px",
          objectFit: "contain",
          borderBottom: "1px solid grey",
        }}
      />
      <Card.Body
        className="d-flex flex-column"
        style={{ maxHeight: "225px", minHeight: "225px" }}
      >
        <div className="d-flex justify-content-between" style={{ flex: 1 }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{formatCurrency(item.price)}</Card.Text>
        </div>
        {quantity > 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
              <Button
                className="me-2"
                variant="primary"
                onClick={() => increaseItemQuantity(item.id)}
              >
                +
              </Button>
              {quantity}
              <Button className="ms-2" variant="primary"  onClick={() => decreaseItemQuantity(item.id)}>
                -
              </Button>
            </div>
            <Button className="mt-2" variant="danger"  onClick={() => removeItem(item.id)}>
              Remove
            </Button>
          </div>
        ) : (
          <Button variant="primary"  onClick={() => increaseItemQuantity(item.id)}>Add</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
