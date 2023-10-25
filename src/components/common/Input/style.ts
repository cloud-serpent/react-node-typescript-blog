import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 4px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 3px;
  padding-right: 8px;
`;

export const Label = styled.p`
  color: #666;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  align-self: stretch;
  height: 56px;
  padding: 4px 12px;
  border-radius: 12px;
  border: 1px solid rgba(102, 102, 102, 0.35);

  color: #666;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
