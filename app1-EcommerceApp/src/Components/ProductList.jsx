import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/ProductSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Products</h1>
      {items.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
}
