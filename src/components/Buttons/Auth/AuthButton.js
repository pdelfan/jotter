import styled from "styled-components";

export const AuthButton = styled.button`
  border-radius: var(--round);
  padding: 0.8rem 2rem;
  background: transparent;
  color: #888;
  border: var(--dark-gray-border);
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #555;
    border: var(--gray-border-hover);
  }
`;

export const AuthButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
