import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

function useShoppingCartContext () {
  return useContext(ShoppingCartContext);
}

export default useShoppingCartContext;