import styled from "styled-components";

const Input = styled.input`
  all: unset;
  width: calc(100% - 17.5px);
  height: 48px;
  padding-right: 17.5px;

  background-color: ${({ theme }) => theme.colors.cyan.extraLightGrayish};
  color: ${({ theme }) => theme.colors.cyan.dark};
  border-radius: 5px;

  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 24px;
  text-align: right;

  position: relative;

  &::placeholder {
    color: ${({ theme }) => theme.colors.cyan.dark};
    opacity: 0.35;
  }

  // active input
  &:focus {
    outline: 2px solid #26c2ae;
    outline: ${(props) => (props.people === "0" ? "2px solid #E17052" : "")};
  }

  // remove arrow from input
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
