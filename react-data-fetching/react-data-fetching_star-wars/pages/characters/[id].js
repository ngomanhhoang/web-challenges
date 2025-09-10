import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Character() {
  const router = useRouter();

  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );
  console.log(data);

  if (error) return <p>❌ Error</p>;
  if (isLoading) return <p>⏳ Loading...</p>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
