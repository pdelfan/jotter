import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.section`
  margin: 2rem auto;
  text-align: center;
`;

const Username = styled.h3`
  color: #585858;
  margin-bottom: 0;
`;

const Avatar = styled.img`
  margin-top: 3rem;
  max-height: 200px;
`;

const Email = styled.h4`
  color: var(--gray);
  margin-top: 0.5rem;
`;

const UpdateMessage = styled.h5`
  color: #888;
  font-size: 1.6rem;
  font-weight: normal;
  max-width: 30rem;
  margin: 3rem auto;
`;

const Account = () => {
  const { user } = useAuth0();

  if (user) {
    return (
      <Container>
        <Avatar src={user.picture} alt="Profile" />
        <Username>{user.nickname}</Username>
        <Email>{user.email}</Email>
        <UpdateMessage>
          Thank you for using Jotter. We are working to improve your experience
          and add new features.
        </UpdateMessage>
      </Container>
    );
  } else {
    return <h1>aw</h1>;
  }
};

export default Account;
