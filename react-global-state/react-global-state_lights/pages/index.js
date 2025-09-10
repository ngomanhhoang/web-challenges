import Link from "../components/Link";

export default function HomePage({ lights }) {
  const count = lights
    .filter((light)=> light.isOn).length
  return (
    <div>
      <h1>Home</h1>
      <p>{count} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
