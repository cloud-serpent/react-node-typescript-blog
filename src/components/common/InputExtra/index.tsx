import React from 'react';
import { Container, IconButton, Label } from './style';

interface InputExtraProps {
  label?: string;
  icon: React.ReactNode;
  onChange?: () => void;
}

export const InputExtraComponent: React.FC<InputExtraProps> = ({
  label,
  icon,
  onChange,
}) => {
  return (
    <Container>
      <IconButton onClick={onChange}>{icon}</IconButton>
      <Label>{label}</Label>
    </Container>
  );
};
