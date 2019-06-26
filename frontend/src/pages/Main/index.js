import React from 'react';

import { Container } from './styles';
import TeamSwitcher from '../../components/TeamSwitcher';
import Projects from '../../components/Projects';

export default function Main() {
  return (
    <Container>
      <TeamSwitcher />
      <Projects />
    </Container>
  );
}
