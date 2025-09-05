import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { volumes } from "@/resources/lib/data";
import Volumes from ".";
export default function Rotk() {
  let volume = volumes[2];
  const findBook = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  console.log(findBook);

  return (
    <>
      <Head>
        <title>{volume.title}</title>
      </Head>
      <header>
        {/* For internal links we need to use Link component */}
        <Link href={`/volumes`}> ← All Volumes</Link>
      </header>
      <main>
        <h1>{volume.title}</h1>
        <Image src={volume.cover} alt={volume.slug} width={140} height={230} />
        <p>{volume.description}</p>
        <ul>
          {volume.books.map((book, id) => (
            <li key={id}>
              {book.ordinal}: {book.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
