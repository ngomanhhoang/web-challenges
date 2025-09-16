import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  if (!data) return;
  return (
    <>
      <Link href={"/"}>Back to overview</Link>
      <li>
        {data.name} - {data.description} - {data.currency}
        {data.price} - {data.category}
      </li>
    </>
  );
}
