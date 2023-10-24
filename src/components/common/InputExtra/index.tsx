import React from 'react';
import { Container, IconButton, Label } from './style';

interface InputExtraProps {
  label?: string;
  icon: React.ReactNode;
}

export const InputExtraComponent: React.FC<InputExtraProps> = ({
  label,
  icon,
}) => {
  return (
    <Container>
      <IconButton>{icon}</IconButton>
      <Label>{label}</Label>
    </Container>
  );
};
