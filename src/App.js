import React from "react";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet } from "react-helmet";
import { theme } from "./themes/Themes";
import Logo from "./assets/images/logo.svg";
import Bill from "./components/Bill";
import SelectTip from "./components/SelectTip";
import People from "./components/People";
import Result from "./components/Result";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [peopleInputError, setPeopleInputError] = useState("");
  const [activeReset, setActiveReset] = useState(false);

  const rightInput =
    bill !== undefined && people !== undefined && people !== undefined;
  const tipAmount = rightInput && ((bill * (tip / 100)) / people).toFixed(2);
  const total = rightInput && ((bill * (1 + tip / 100)) / people).toFixed(2);
  const showTipAmount =
    tipAmount !== "NaN" && tipAmount !== "Infinity" && tipAmount !== false;
  const showTotal = total !== "NaN" && total !== "Infinity" && total !== false;

  const handleReset = () => {
    setBill("");
    setTip("");
    setPeople("");
    setActiveReset(false);
  };

  useEffect(() => {
    if (people === "0") {
      setPeopleInputError("Can't be zero");
    } else {
      setPeopleInputError("");
    }
  }, [people]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <AppContainer>
        <Image src={Logo} />

        <CalculatorContainer>
          <InputsContainer>
            <Bill
              placeholder="0"
              type="number"
              value={bill}
              setBill={setBill}
              setActiveReset={setActiveReset}
            />

            <SelectTip
              setTip={setTip}
              tip={tip}
              placeholder="Custom"
              type="number"
              setActiveReset={setActiveReset}
            />

            <People
              placeholder="0"
              type="number"
              value={people}
              people={people}
              peopleInputError={peopleInputError}
              setPeople={setPeople}
              setActiveReset={setActiveReset}
            />
          </InputsContainer>

          <Result
            showTipAmount={showTipAmount}
            showTotal={showTotal}
            tipAmount={tipAmount}
            total={total}
            handleReset={handleReset}
            activeReset={activeReset}
          />
        </CalculatorContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  padding: 50px 0 40px 0;

  @media only screen and (min-width: 1440px) {
    padding: 163px 0 89px 0;
  }
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px 25px 0 0;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  // width: 100%;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 48px;
    // width: 920px;
    border-radius: 25px;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 32px 0 32px;

  @media only screen and (min-width: 1440px) {
    margin: 45px 0 48px 48px;
  }
`;

export default App;
