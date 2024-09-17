import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
function Header() {
  return (
    <header className=" flex items-center font-pizza  justify-between bg-yellow-400 uppercase px-3 py-4 border-b border-stone-500">
      <Link to="/" className="tracking-[5px]">Fast React Pizza co.</Link>
      <SearchOrder />
      <UserName/>
    </header>
  );
}

export default Header;
