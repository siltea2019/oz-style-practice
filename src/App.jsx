import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  background-color: #121212;
}
`;

const FlexSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px, 40px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <FlexSection>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </FlexSection>
      </main>
    </>
  );
}

export default App;
