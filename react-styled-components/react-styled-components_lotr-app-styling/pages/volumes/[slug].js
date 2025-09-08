import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import ArrowLeft from "@/icons/arrow-left.svg";
import ArrowRight from "@/icons/arrow-right.svg";
import ChevronLeft from "@/icons/chevron-left.svg";
import styled from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <Wrapper>
      <Goback>
        <ChevronLeft />
        <Volumes href="/volumes"> All Volumes</Volumes>
      </Goback>

      <Title>{title}</Title>
      <Description>{description}</Description>

      <Main $bgColor={volume.color}>
        <WrapperList>
          {books.map(({ ordinal, title }) => (
            <List key={title}>
              {ordinal} <Strong>{title}</Strong>
            </List>
          ))}
        </WrapperList>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={225}
        />
      </Main>

      {previousVolume ? (
        <WrapperNewpageLeft>
          <ArrowLeft />
          <Newpage href={`/volumes/${previousVolume.slug}`}>
            Previous Volume <TextVolume>{previousVolume.title}</TextVolume>
          </Newpage>
        </WrapperNewpageLeft>
      ) : null}
      {nextVolume ? (
        <WrapperNewpageRight>
          <Newpage href={`/volumes/${nextVolume.slug}`}>
            Next Volume <TextVolume>{nextVolume.title}</TextVolume>
          </Newpage>
          <ArrowRight />
        </WrapperNewpageRight>
      ) : null}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font: var(--font-body);
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  min-height: 100vh;
`;

const Goback = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0 0 2rem;
`;

const Volumes = styled(Link)`
  text-decoration: none;
  // color: #000;
  color: unset;
`;

const Title = styled.h1`
  font: var(--font-headline-1);
  padding: 0 2rem;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.$bgColor};
  color: #fff;
  padding: 1.5rem 2rem;
`;

const WrapperList = styled.ul`
  list-style: none;
  padding: 0;
  margin: auto 0;
  line-height: 2rem;
`;
const Description = styled.p`
  padding: 0 2rem;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  font: var(--font-caption--italic);
  margin-bottom: 2rem;
  max-width: 140px;
`;

const Strong = styled.strong`
  font: var(--font-title);
`;

const Newpage = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${({theme}) => theme.text};
  align-items: flex-start;
  font: var(--font-caption--italic);
  margin: 0 0.5rem;
`;

const WrapperNewpageLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0 0 1rem;
`;

const WrapperNewpageRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1rem 0 0;
`;

const TextVolume = styled.p`
  margin: 0;
  font: var(--font-caption)
`
