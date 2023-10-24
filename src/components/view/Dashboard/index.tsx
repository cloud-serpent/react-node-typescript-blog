import React from 'react';
import { Container, Content, GoToLink } from './styles';
import { PATH } from 'consts';

export const DashboardView: React.FC = () => {
  return (
    <Container>
      <Content>Welcome to Dashboard!!!</Content>
      <GoToLink to={PATH.TODOS_LIST}>Go to ToDos List</GoToLink>
      <GoToLink to={PATH.USERS_LIST}>Go to Users List</GoToLink>
      <GoToLink to={PATH.SIGN_UP}>Go to Sign Up</GoToLink>
      <GoToLink to={PATH.USERS_LIST}>Go to Users List</GoToLink>
    </Container>
  );
};
