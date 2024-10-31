import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  console.log(<Outlet />);
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid-rows-[auto_1fr_auto] h-screen grid  ">
      {isLoading && <Loader />}
      <Header />
      <div className="my-10 overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
