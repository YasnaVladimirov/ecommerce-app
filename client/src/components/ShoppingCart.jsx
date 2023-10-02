import { Offcanvas } from "react-bootstrap";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../util/formatCurrency";
import data from "../data/items";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

function ShoppingCart() {
  const { isOpen, cartItems, toggleCart } = useShoppingCartContext();

  const totalPrice = cartItems.reduce((accumulator, currItem) => {
    const subtotal =
      currItem.quantity * data.find((item) => item.id === currItem.id).price;
    return accumulator + subtotal;
  }, 0);

  const lineItems = cartItems.map((cartItem) => {
    const foundItem = data.find((item) => item.id === cartItem.id);
    if (foundItem) {
      return {
        ...cartItem,
        name: foundItem.name,
        price: foundItem.price,
      };
    }
  });

  const handleSubmit = async () => {
    try {
      const stripe = await loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY);
      const response = await axios.post("http://localhost:5500/checkout", lineItems.map(item => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name
            },
            unit_amount: item.price * 100
          },
          quantity: item.quantity
        }
      }));
      console.log(response.data.id);
      
      await stripe.redirectToCheckout({sessionId: response.data.id});
    } catch (error) {
      console.log("Error, ", error);
    }
  };

  return (
    <Offcanvas show={isOpen} onHide={toggleCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length ? (
          <>
            {cartItems?.map((item) => (
              <CartItem key={item.id} currItem={item}/>
            ))}
            <div
              className="d-flex justify-content-end fs-5 mt-3"
              style={{ fontWeight: "600" }}
            >
              Total:<span className="ms-2">{formatCurrency(parseInt(totalPrice, 10))}</span>
            </div>
            <br />
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Procceed
              </button>
            </div>
          </>
        ) : (
          <p className="fs-5 h-100 d-flex justify-content-center align-items-center">
            Cart is empty
          </p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ShoppingCart;
