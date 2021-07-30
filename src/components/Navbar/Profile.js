import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "gatsby";
import LoadingAvatar from "../../assets/loadingAvatar.png";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 13rem;

  @media (max-width: 60rem) {
    order: 2;
  }
`;

const Avatar = styled.img`
  display: flex;
  width: 2rem;
  height: 2rem;
  align-self: center;
  margin-right: 0.5rem;
  object-fit: cover;

  &:hover {
    filter: brightness(80%);
  }

  @media (max-width: 60rem) {
    margin-right: 0;
  }
`;

const Username = styled.h4`
  color: #333651;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 60rem) {
    display: none;
  }
`;

const SignOut = styled.button`
  color: var(--mid-gray);
  background-color: transparent;
  padding: 0;
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: black;
  }

  @media (max-width: 60rem) {
    display: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export default function Profile() {
  const {
    user,
    isAuthenticated,
    isLoading,
    logout,
    // getAccessTokenSilently
  } = useAuth0();

  if (isLoading || !user) {
    return (
      <ProfileContainer>
        <Link to="/">
          <Avatar src={LoadingAvatar} />
        </Link>
        <UserInfo>
          <Username>Loading...</Username>
          <SignOut>Loading...</SignOut>
        </UserInfo>
      </ProfileContainer>
    );
  } else {
    if (isAuthenticated) {
      return (
        <ProfileContainer>
          <Link to="../../account">
            <Avatar src={user.picture} alt="Avatar" />
          </Link>
          <UserInfo>
            <Username>{user.nickname}</Username>

            <SignOut onClick={() => logout()}>Sign Out</SignOut>
          </UserInfo>
        </ProfileContainer>
      );
    }
  }
  //   {
  //     useEffect(() => {
  //       isAuthenticated &&
  //         getAccessTokenSilently().then((res) => console.log("Token:", res));
  //     });
  //   }
}
