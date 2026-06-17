import React from 'react';
import styled from 'styled-components';

interface ChipOption {
  value: string;
  label: string;
}

interface ChipGroupProps {
  options: ChipOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

const GroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ChipInput = styled.input`
  display: none;
`;

const ChipLabel = styled.label<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $checked, theme }) => ($checked ? theme.accentGlow : 'rgba(30,144,214,0.07)')};
  border: 1px solid ${({ $checked, theme }) => ($checked ? theme.accent : 'rgba(30,144,214,0.18)')};
  font-size: 13px;
  font-weight: 500;
  color: ${({ $checked, theme }) => ($checked ? theme.accent : theme.text.secondary)};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.fast};
  user-select: none;

  &:hover {
    border-color: rgba(30, 144, 214, 0.45);
  }
`;

export const ChipGroup: React.FC<ChipGroupProps> = ({
  options,
  selectedValues,
  onChange,
}) => {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <GroupContainer>
      {options.map(opt => {
        const isChecked = selectedValues.includes(opt.value);
        return (
          <React.Fragment key={opt.value}>
            <ChipInput
              type="checkbox"
              id={`chip-${opt.value}`}
              checked={isChecked}
              onChange={() => handleToggle(opt.value)}
            />
            <ChipLabel htmlFor={`chip-${opt.value}`} $checked={isChecked}>
              {opt.label}
            </ChipLabel>
          </React.Fragment>
        );
      })}
    </GroupContainer>
  );
};

export default ChipGroup;
