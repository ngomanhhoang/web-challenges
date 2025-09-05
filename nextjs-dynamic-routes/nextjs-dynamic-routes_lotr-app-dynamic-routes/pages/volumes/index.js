import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  console.log(router);
  

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function handleClickRandom() {
    const random = getRandomElement(volumes);
    const newUrl = `/volumes/${random.slug}`;
    router.push(newUrl)
    console.log(newUrl);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume, id) => (
          <li key={id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClickRandom}>Get random volume</button>
    </>
  );
}
