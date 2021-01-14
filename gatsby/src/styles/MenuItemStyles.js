import styled from 'styled-components';

const MenuItemStyles = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  p {
    margin: 0;
  }
  button {
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
  }
  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 50%;
  }
`;

export default MenuItemStyles;
