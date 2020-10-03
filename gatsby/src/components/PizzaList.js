import { Link } from 'gatsby';
import React from 'react';

const SinglePizza = ({ pizza }) => (
  <>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
      <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
    </Link>
  </>
);

const PizzaList = ({ pizzas }) => (
  <>
    {pizzas.map((pizza) => (
      <SinglePizza key={pizza.id} pizza={pizza} />
    ))}
  </>
);

export default PizzaList;
