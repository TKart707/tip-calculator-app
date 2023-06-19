import React from "react";
import styled from "styled-components";
import Input from "./InputStyled";
import Label from "./LabelStyled";

const TIPNUMBER = [5, 10, 15, 25, 50];
const MAX_TIP = 4;

function SelectTip({ setTip, tip, placeholder, type, setActiveReset }) {
  return (
    <Wrapper>
      <TipLabel>Select Tip %</TipLabel>
      <Container>
        {TIPNUMBER.map((tipNum, index) => (
          <Button
            key={index}
            isActive={tipNum === tip}
            onClick={() => {
              setTip(tipNum);
              setActiveReset(true);
            }}
            value={tip}
          >
            {tipNum}%
          </Button>
        ))}
        <TipInput
          placeholder={placeholder}
          type={type}
          value={tip}
          onChange={(e) => {
            if (e.target.value.length < MAX_TIP) {
              setTip(e.target.value);
              setActiveReset(true);
            }
          }}
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 16px) / 2));
  gap: 16px;

  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, calc((100% - 28px) / 3));
    column-gap: 14px;
    row-gap: 16px;
  }
`;

const Button = styled.button`
  height: 48px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.cyan.strong : theme.colors.cyan.dark};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.cyan.dark : theme.colors.white};

  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.primary}, monospace;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.colors.cyan.dark};
    cursor: pointer;
  }
`;

const TipInput = styled(Input)`
  &::placeholder {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid #26c2ae;
  }
`;

const TipLabel = styled(Label)`
  margin-bottom: 16px;
`;

export default SelectTip;
