import styled from "styled-components";

const ShowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.3rem;
  padding: 0.4rem 0.7rem;
  border-radius: 0.9rem;
  background-color: #edf2f7;
  color: black;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--button-hover);
    color: white;
  }
`;


export default ShowButton;