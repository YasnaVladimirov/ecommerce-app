import StoreItem from "../components/StoreItem";
import { Container, Col, Row } from "react-bootstrap";
import data from "../data/items";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import FiltersMenu from "../components/FiltersMenu";

function Store() {
  const { category, price } = useShoppingCartContext();
  let items = data.filter((item) => item.price <= price);
  if (category !== "All" && category !== "") {
    items = data.filter(
      (item) => item.category === category && item.price <= price
    );
  }

  return (
    <Container className="d-flex flex-wrap">
      <div style={{ flex: 1 }} className="mt-5">
        <FiltersMenu />
      </div>
      <div className="d-flex flex-wrap ms-5 mt-5" style={{ flex: 3 }}>
        {items?.map((item, i) => (
          <div key={i} className="me-3 mb-3">
            <StoreItem item={item}/>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Store;
