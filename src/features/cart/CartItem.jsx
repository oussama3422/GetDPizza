import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import ButtonUpdateQuantity from "./ButtonUpdateQuantity";
import DeleteItem from "./DeleteItem";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6 ">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <ButtonUpdateQuantity id={id} currentQuantity={currentQuantity} />
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
