import React from 'react';
import PropTypes from 'prop-types';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

const createPatchFrom = (value) => {
  PatchEvent.from(value === '' ? unset : set(Number(value)));
};

const formatPrice = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'EUR',
}).format;

const PriceInput = ({ type, value, onChange, inputComponent }) => (
  <div>
    <h4>
      {type.title} - {value ? formatPrice(value / 100) : ''}
    </h4>
    <p>{type.description}</p>
    <input
      type={type.name}
      value={value}
      onChange={(event) => onChange(createPatchFrom(event.target.value))}
      ref={inputComponent}
    />
  </div>
);

PriceInput.focus = () => {
  this._inputElement.focus();
};

PriceInput.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inputComponent: PropTypes.node.isRequired,
};
export default PriceInput;
