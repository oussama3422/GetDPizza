import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrderItem({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrderItem;

export async function action({ request, params }) {
  const data = { priority: false };
  console.log(params.orderId);
  await updateOrder(params.orderId, data);
  return null;
}
