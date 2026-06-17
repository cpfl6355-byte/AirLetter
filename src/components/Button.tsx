import styled from 'styled-components';

export const Button = styled.button<{ $variant?: 'primary' | 'ghost'; $size?: 'sm' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ $size }) => ($size === 'sm' ? '9px 16px' : '14px 24px')};
  font-size: ${({ $size }) => ($size === 'sm' ? '13px' : '15px')};
  border-radius: ${({ $size, theme }) => ($size === 'sm' ? theme.radius.sm : theme.radius.md)};
  border: none;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.fast};
  text-decoration: none;
  width: 100%;
  outline: none;

  ${({ $variant, theme }) =>
    $variant === 'ghost'
      ? `
    background: rgba(30,144,214,0.08);
    color: ${theme.text.secondary};
    border: 1px solid rgba(30,144,214,0.2);

    &:hover {
      background: rgba(30,144,214,0.15);
      color: ${theme.text.primary};
    }
  `
      : `
    background: linear-gradient(135deg, ${theme.accent}, #0A6EBD);
    color: #fff;
    box-shadow: 0 4px 16px ${theme.accentGlow};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px ${theme.accentGlow};
    }

    &:active {
      transform: translateY(0);
    }
  `}
`;

export default Button;
