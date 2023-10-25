import React, { ChangeEvent } from 'react';
import { Container, Input, Label, LabelContainer } from './style';
import { InputExtraComponent } from '../InputExtra';

export interface InputProps {
  label: string;
  extraLabel?: string;
  icon?: React.ReactNode;
  name: string;
  value: string | number;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeExtra?: () => void;
}

export const InputComponent: React.FC<InputProps> = ({
  label,
  extraLabel,
  icon,
  name,
  type,
  value,
  onChange,
  onChangeExtra,
}) => {
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
        {icon && (
          <InputExtraComponent
            label={extraLabel}
            icon={icon}
            onChange={onChangeExtra}
          />
        )}
      </LabelContainer>
      <Input name={name} value={value} onChange={onChange} type={type} />
    </Container>
  );
};
