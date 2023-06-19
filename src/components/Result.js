import React from "react";
import styled from "styled-components";

function Result({
  showTipAmount,
  showTotal,
  tipAmount,
  total,
  handleReset,
  activeReset,
}) {
 
  return (
    <Wrapper>
      <ResultContainer>
        <Div>
          <TextDiv>
            <ResultName>Tip Amount</ResultName>
            <Person>/ person</Person>
          </TextDiv>
          <ResultNumber>
            {showTipAmount ? `$${tipAmount}` : "$0.00"}
          </ResultNumber>
        </Div>

        <Div>
          <TextDiv>
            <ResultName>Total</ResultName>
            <Person>/ person</Person>
          </TextDiv>
          <ResultNumber>{showTotal ? `$${total}` : "$0.00"}</ResultNumber>
        </Div>
      </ResultContainer>

      <ResetButton onClick={handleReset} activeReset={activeReset}>
        Reset
      </ResetButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 0 24px 32px 24px;
  padding: 39px 22px 24px 24px;

  background-color: ${({ theme }) => theme.colors.cyan.dark};
  border-radius: 15px;

  @media only screen and (min-width: 1440px) {
    margin: 32px 32px 32px 0;
    padding: 40px;
    justify-content: space-between;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 1440px) {
    gap: 92px;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

const TextDiv = styled.div`
  @media only screen and (min-width: 1440px) {
    padding-top: 16px;
    padding-bottom: 12px;
  }
`;

const ResultName = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

const Person = styled.p`
  font-size: 13px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.cyan.grayish};
`;

const ResultNumber = styled.p`
  font-size: 32px;
  line-height: 47px;
  letter-spacing: -0.666667px;
  color: ${({ theme }) => theme.colors.cyan.strong};

  @media only screen and (min-width: 1440px) {
    font-size: 48px;
    line-height: 71px;
    letter-spacing: -1px;
  }
`;

const ResetButton = styled.button`
  height: 48px;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.primary}, monospace;
  color: ${({ theme }) => theme.colors.cyan.dark};
  background-color: ${(props) =>
    props.activeReset ? props.theme.colors.cyan.strong : "#0D686D"};
  border: none;
  border-radius: 5px;
  
  @media only screen and (min-width: 1440px) {
    
    &:hover {
      background-color: ${({theme}) => theme.hover};
      cursor: pointer;
    }
  }

`;

export default Result;
