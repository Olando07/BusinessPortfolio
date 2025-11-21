import React from "react";
import styled, { css } from "styled-components";
import type { RadioButtonProps } from "./RadioButton.types";

const RadioContainer = styled.label<{ disabled?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    user-select: none;
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.55;
            pointer-events: none;
        `}
`;

const StyledRadio = styled.input<{ disabled?: boolean }>`
    width: 18px;
    height: 18px;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    accent-color: var(--color-primary, #007bff);

    &:disabled {
        opacity: 0.55;
    }
`;

const RadioLabel = styled.span<{ disabled?: boolean }>`
    font-size: 1rem;
    color: ${(props) => (props.disabled ? "#6a6a6aff" : "#000")};
`;

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    name,
    value,
    checked = false,
    disabled = false,
    onChange,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange && !disabled) {
            onChange(e.target.value);
        }
    };

    return (
        <RadioContainer disabled={disabled}>
            <StyledRadio
                type="radio"
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                aria-disabled={disabled}
            />
            <RadioLabel disabled={disabled}>{label}</RadioLabel>
        </RadioContainer>
    );
};

export default RadioButton;
