import styled from "styled-components";

export const SectionTitle = styled.h5`
  font-size: 1.3rem;
  text-align: ${(props) => (props.center ? "center" : "")};
  color: #374151;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const Text = styled.div`
  p {
    margin-top: 0rem;
  }
`;
