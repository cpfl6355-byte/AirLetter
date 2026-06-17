import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.bg.card};
  border: 1px solid rgba(30,144,214,0.12);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  backdrop-filter: blur(12px);
  transition: transform ${({ theme }) => theme.transition.normal}, box-shadow ${({ theme }) => theme.transition.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.card};
  }
`;

export default Card;
