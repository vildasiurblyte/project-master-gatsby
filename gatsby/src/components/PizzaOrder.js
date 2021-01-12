import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

const PizzaOrder = ({ order, pizzas, removeFromOrder }) => {
  console.log(order);
  return (
    <>
      {order.map((singleOrder, index) => {
        const pizza = pizzas.find(
          (singlePizza) => singlePizza.id === singleOrder.id
        );

        return (
          <MenuItemStyles key={singleOrder.id}>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
              <button
                onClick={() => removeFromOrder(index)}
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${singleOrder.name} from Order`}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
};
export default PizzaOrder;
