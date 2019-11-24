import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : '#915c1f')};

  small {
    color: #333;
    font-size: 14px;
  }
`;
