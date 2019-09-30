import React from 'react';

import {
  Container,
  FieldSearch,
  CardGroup,
  CardGroupText
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <FieldSearch placeholder="Buscar grupos" />
      <CardGroup>
        <CardGroupText>Teste de card</CardGroupText>
      </CardGroup>
    </Container>
  );
}

Dashboard.navigationOptions = {
  header: null,
};