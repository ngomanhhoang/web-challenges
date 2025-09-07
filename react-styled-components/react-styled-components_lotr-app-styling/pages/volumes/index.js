import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes() {
  return (
    <Wrapper>
      <Title>The Lord of the Rings</Title>
      <p>{introduction}</p>
      <Head>All Volumes</Head>
      <Card>
        {volumes.map((volume) => (
          <List key={volume.id}>
            <Book
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={87}
              height={140}
            />
            <Linklist href={`/volumes/${volume.slug}`}>{volume.title}</Linklist>
          </List>
        ))}
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
`;

const Head = styled.h2`
  font: var(--font-headline-2);
`;

const Card = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-items: flex-start;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const Linklist = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.text};
  max-width: 90px;
  font: var(--font-caption);
`;

const Book = styled(Image)`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;
