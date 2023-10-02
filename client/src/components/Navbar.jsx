import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useShoppingCartContext from "../hooks/useShoppingCartContext";

function Navbar() {
  const { cartItems, toggleCart } = useShoppingCartContext();

  return (
    <NavbarBs className="shadow-sm bg-white">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Top Shop
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          style={{ position: "relative" }}
          onClick={toggleCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div
            className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              height: "1.1rem",
              width: "1.1rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            {cartItems.filter((item) => item.quantity > 0).length}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
