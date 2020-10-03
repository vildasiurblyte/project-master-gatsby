import { graphql } from 'gatsby';
import React from 'react';

const PizzasPage = () => (
  <>
    <p>Pizzas</p>
  </>
);

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default PizzasPage;
