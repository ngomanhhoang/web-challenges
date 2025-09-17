import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function HomePage() {
  const { data, error, isLoading } = useSWR(`/api/random-character/`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <p>
      First name: {data.character.firstName} - Last Name:{" "}
      {data.character.lastName} - Twitter: {data.character.twitter} - Geohash:{" "}
      {data.character.geohash}
    </p>
  );
}
