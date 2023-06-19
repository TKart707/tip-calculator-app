import React from "react";
import styled from "styled-components";
import Input from "./InputStyled";
import IconImg from "./IconImgStyled";
import PersonIcon from "../assets/images/icon-person.svg";
import Label from "./LabelStyled";

const MAX_PEOPLE = 9;

function People({
  placeholder,
  type,
  value,
  peopleInputError,
  setPeople,
  setActiveReset,
  people
}) {
  return (
    <Wrapper>
      <ErrorWrapper>
        <Label>Number of People</Label>
        <InputErorr>{peopleInputError}</InputErorr>
      </ErrorWrapper>
      <Container>
        <Input
          placeholder={placeholder}
          type={type}
          value={value}
          people={people}
          onKeyDown={(e) => {
            if (e.key === ".") {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            if (e.target.value.length < MAX_PEOPLE) {
              setPeople(e.target.value);
              setActiveReset(true);
            }
          }}
        />
        <IconImg src={PersonIcon} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div`
  position: relative;
`;

const InputErorr = styled.span`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.primary}, monospace;
  color: #e17457;
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default People;
