import React from 'react';
import { Container, Input, Label, LabelContainer } from './style';
import { InputExtraComponent } from '../InputExtra';

export interface InputProps {
  label: string;
  extraLabel?: string;
  icon?: React.ReactNode;
}

export const InputComponent: React.FC<InputProps> = ({
  label,
  extraLabel,
  icon,
}) => {
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
        {icon && <InputExtraComponent label={extraLabel} icon={icon} />}
      </LabelContainer>
      <Input />
    </Container>
  );
};
