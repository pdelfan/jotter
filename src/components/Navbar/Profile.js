import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "gatsby";
import LoadingAvatar from "../../assets/loadingAvatar.png";

const ProfileContainer = styled.div`
  display: flex;
  max-width: 13rem;
  line-height: 1rem;

  @media (max-width: 60rem) {
    order: 2;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  margin-bottom: -0.2rem;
  object-fit: cover;
  transition: 0.2s;

  &:hover {
    filter:brightness(80%);
    transition: 0.2s;
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

// const Email = styled.h4`
//   color: #9ca7bc;
//   font-size: 0.7rem;
//   font-weight: 600;
//   margin: 0;

// `;

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

export default function Profile() {
  const {
    user,
    isAuthenticated,
    isLoading,
    logout,
    // getAccessTokenSilently,
  } = useAuth0();

  if (isLoading || !user) {
    return (
      <ProfileContainer>
        <Avatar src={LoadingAvatar} />
      </ProfileContainer>
    );
  } else {
    if (isAuthenticated) {
      return (
        <ProfileContainer>
          <Link to="../../account">
            <Avatar src={user.picture} alt="Avatar" />
          </Link>
          <div>
            <Username>{user.nickname}</Username>
            <SignOut onClick={() => logout()}>Sign Out</SignOut>
          </div>
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
