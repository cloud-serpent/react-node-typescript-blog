import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 1px 1px 2px rgba(0.3, 0.3, 0.3, 0.4);
  height: 800px;
  max-width: 1000px;
  transition: 0.3s;
  border-radius: 20px;
  display: grid;
  grid-template-columns: auto 650px;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0.3, 0.3, 0.3, 0.5);
  }

  overflow: hidden;
`;

export const Ads = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FormContainer = styled.form`
  padding: 64px 72px 56px 72px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
