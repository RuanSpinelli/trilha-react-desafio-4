import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

// Adicione as propriedades do botão HTML
export const ButtonContainer = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:disabled {
        background-color: #ccc;
        border-color: #ccc;
        cursor: not-allowed;
        opacity: 0.7;
    }
`;