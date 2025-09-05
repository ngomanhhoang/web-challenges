import Head from "next/head";
import Link from "next/link";
import { introduction, volumes } from "../resources/lib/data";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>The Lord of the Rings</title>
      </Head>
      <header>
        <h1>The Lord of the Rings</h1>
      </header>
      <main>
        <p>{introduction}</p>
        <Link href={`/volumes`}>All Volumes</Link>

        {/* <ul>
          {volumes.map((volume, index) => (
            <li key={index}>
              <Link href={`/volumes/${volume.slug.toLowerCase()}`}>
                {volume.title}
              </Link>
            </li>
          ))}
        </ul> */}
      </main>
    </>
  );
}
