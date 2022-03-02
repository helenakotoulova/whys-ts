import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  padding: 2rem 3rem;
  background-color: #fff;
  margin: 1rem auto;

  @media (min-width:768px) {
      max-width:42rem;
  }
`;

export default Card;
