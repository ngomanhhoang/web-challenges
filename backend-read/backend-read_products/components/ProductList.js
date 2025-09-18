import useSWR from "swr";
import StyledLink from "@/components/Link";
import styled from "styled-components";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledLink href={`/${product._id}`}>
              {product.name}
              {product.reviews?.map((review) => (
                <div key={review._id}>
                  <h4>{review.title}</h4>
                  <p>{review.text}</p>
                  <p>Rating: {review.rating}</p>
                </div>
              ))}
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}

const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0;
`;
