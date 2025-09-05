import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { volumes } from "../../resources/lib/data";

export default function Volumes() {
  console.log("volumes", volumes);

  return (
    <>
      <Head>
        <title>All Volumes</title>
      </Head>
      <main>
        <Link href={`/`}>Overview</Link>
        <h1>Volumes</h1>
        <section>
          {volumes.map((volume, index) => (
            <Link href={`/volumes/${volume.slug.toLowerCase()}`} key={index}>
              <div>
                <Image
                  src={volume.cover}
                  alt={volume.slug}
                  width={140}
                  height={230}
                />
                <h1>{volume.title}</h1>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
