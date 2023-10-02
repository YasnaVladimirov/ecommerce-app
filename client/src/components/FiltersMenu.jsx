import data from "../data/items";
import useShoppingCartContext from "../hooks/useShoppingCartContext";

function FiltersMenu() {
  const allCategories = data.map((item) => item.category);
  const categories = [
    "All",
    ...allCategories.filter((item, i) => {
      return allCategories.indexOf(item) === i;
    }),
  ];
  const { setCategory, price, setPrice } = useShoppingCartContext();
  

  return (
    <div>
      <h4>Categories</h4>
      {categories.map((category, i) => (
        <div key={i} onClick={() => setCategory(category)} style={{cursor: "pointer"}}>
          {category}
        </div>
      ))}
      <h4 className="mt-5">Maximum Price</h4>
      <input
        type="range"
        name="slider"
        id="slider-price"
        min={Math.min(...data.map(item => item.price))}
        max={Math.max(...data.map(item => item.price))}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="slider-price" id="price">
        ${price}
      </label>
    </div>
  );
}

export default FiltersMenu;
