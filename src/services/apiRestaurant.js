const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(order) {
  try {
    const response = await fetch(
      "https://react-fast-pizza-api.onrender.com/api/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );
    console.log(response);
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error details:", errorDetails);
      throw new Error("Failed to create order");
    }

    return await response.json();
  } catch (error) {
    console.error("Create order error:", error);
    throw error;
  }
}
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
