import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const PizzaGrid = `
display: grid;
grid-gap: 2rem;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const SinglePizzaPage = ({ data: { pizza } }) => (
  <div>
    <Img fluid={pizza.image.asset.fluid} />
    <PizzaGrid>
      <h2 className="mark">{pizza.name}</h2>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping.id}>{topping.name}</li>
        ))}
      </ul>
    </PizzaGrid>
  </div>
);

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;

export default SinglePizzaPage;
