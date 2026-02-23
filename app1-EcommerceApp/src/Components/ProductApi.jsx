const BASE_URL = "https://dummyjson.com";

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  return response.json();
}

export async function fetchProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
}
