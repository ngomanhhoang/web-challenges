import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {product.name} - {product.description} - {product.currency}
          {product.price} - {product.category}
        </li>
      ))}
    </ul>
  );
}
