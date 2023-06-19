import React from "react";
import styled from "styled-components";
import DollarLogo from "../assets/images/icon-dollar.svg";
import IconImg from "./IconImgStyled";
import Input from "./InputStyled";
import Label from "./LabelStyled";

const MAX_BILL = 9;

function Bill({ placeholder, type, value, setBill, setActiveReset }) {
  return (
    <Wrapper>
      <Label>Bill</Label>
      <Container>
        <Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => {
            if (e.target.value.length < MAX_BILL) {
              setBill(e.target.value);
              setActiveReset(true);
            }
          }}
        />
        <IconImg src={DollarLogo} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div`
  position: relative;
`;

export default Bill;
